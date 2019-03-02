-- read user input
local cjson = require "cjson"
local value = {}
ngx.req.read_body()
local data = ngx.req.get_body_data()
if data then
    value = cjson.decode(data)
    ngx.print(value["space_name"] .. "\n")
end

-- make request to etcd database
local http = require "resty.http"
local httpc = http.new()
local url = "http://127.0.0.1:2379/v2/keys/" .. value["space_name"]
local res, err = httpc:request_uri(url, {
    method = "PUT",
    body = "dir=true"
  })

  if not res then
    ngx.say("failed to request: ", err)
    return
  end