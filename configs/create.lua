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
httpc:set_timeout(500)
httpc:connect("etcd", 2379)

local res, err = httpc:request({
    path="/v2/keys/spaces/" .. value["space_name"],
    method = "PUT",
    body = "dir=true"
  })

  ngx.sleep(10)

  if not res then
    ngx.say("failed to request: ", err)
    return
  end

ngx.status = ngx.HTTP_OK  
ngx.say(cjson.encode({ status = true }))  
return ngx.exit(ngx.HTTP_OK)  

