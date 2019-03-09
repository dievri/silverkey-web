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
if decoded_body ["errorCode"] == 100 then
ngx.say(cjson.encode({exists = false }))  
  return
end

local res, err = httpc:request_uri("http://etcd:2379/v2/keys/user/" .. value["username"] .. "/password")
if not res then
    ngx.say("failed to request: ", err)
    return
end

local decoded_body = cjson.decode(res.body)  
if decoded_body["node"]["value"] == value["password"] then
ngx.say(cjson.encode({success = true }))  
  return
end

ngx.status = ngx.HTTP_UNAUTHORIZED
return ngx.exit(ngx.HTTP_UNAUTHORIZED)  
