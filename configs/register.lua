-- read user input
local cjson = require "cjson"
local value = {}
ngx.req.read_body()
local data = ngx.req.get_body_data()
if data then
    value = cjson.decode(data)
end

-- make request to etcd database
local http = require "resty.http"
local httpc = http.new()

-- check for existenct
local res, err = httpc:request_uri("http://etcd:2379/v2/keys/user/" .. value["username"])
if not res then
    ngx.say("failed to request: ", err)
    return
end

local decoded_body = cjson.decode(res.body)  
if decoded_body ["errorCode"] ~= 100 then
ngx.say(cjson.encode({ status = false, exists = true }))  
  return
end

-- create <user> directory
local res, err = httpc:request_uri("http://etcd:2379/v2/keys/user/" .. value["username"], {
    method = "PUT",
    body = "dir=true",
    headers = {
    ["Content-Type"] = "application/x-www-form-urlencoded",
    },
    keepalive_timeout = 60,
    keepalive_pool = 10
  })

  if not res then
    ngx.say("failed to request: ", err)
    return
  end

  -- add user email

  local res, err = httpc:request_uri("http://etcd:2379/v2/keys/user/" .. value["username"] .. "/email", {
    method = "PUT",
    body = "value=" .. value["email"],
    headers = {
    ["Content-Type"] = "application/x-www-form-urlencoded",
    },
    keepalive_timeout = 60,
    keepalive_pool = 10
  })

  if not res then
    ngx.say("failed to request: ", err)
    return
  end

-- add user password

local res, err = httpc:request_uri("http://etcd:2379/v2/keys/user/" .. value["username"] .. "/password", {
  method = "PUT",
  body = "value=" .. value["password"],
  headers = {
  ["Content-Type"] = "application/x-www-form-urlencoded",
  },
  keepalive_timeout = 60,
  keepalive_pool = 10
})

if not res then
  ngx.say("failed to request: ", err)
  return
end



  -- gracefully logout 
  ngx.status = ngx.HTTP_OK  
  ngx.say(cjson.encode({ status = true }))  
  return ngx.exit(ngx.HTTP_OK)  