-- local cjson = require "cjson"
-- -- local value = {}
-- ngx.req.read_body()
-- local data = ngx.req.get_body_data()
-- -- if data then
   
-- -- end

-- ngx.log(ngx.NOTICE, data) 
local http = require "resty.http"
local httpc2 = http.new()
httpc2:set_timeout(500)
httpc2:connect("etcd", 2379)

local res, err = httpc2:request({
    path="/keys/v2/user/dievriss/",
    method = "PUT",
    body = "dir=true"
  })

 --ngx.log(ngx.NOTICE, res:read_body()) 

  ngx.sleep(5)

  if not res then
    ngx.say("failed to request: ", err)
    return
  end

ngx.status = ngx.HTTP_OK  
ngx.say(cjson.encode({ status = true }))  
return ngx.exit(ngx.HTTP_OK)  
