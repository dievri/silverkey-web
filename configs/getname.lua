local cjson = require "cjson"
local session = require "resty.session".open()
ngx.say(cjson.encode({username = session.data.name}))
return