local http = require "resty.http"
local httpc = http.new()
local res, err = httpc:request_uri("http://etcd:2379/v2/keys/user/sanich", {
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


ngx.status = ngx.HTTP_OK  
ngx.say("True status")  
return ngx.exit(ngx.HTTP_OK)  
