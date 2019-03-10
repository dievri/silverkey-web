local cjson = require "cjson"
local session = require "resty.session".start()
session:destroy()
ngx.say(cjson.encode({loggedOut = true }))  
return