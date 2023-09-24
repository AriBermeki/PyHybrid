import globals
from hybrid import app





def run(
        mode: str= None, 
        options:str=None,
        port:int = None,
        jinja_templates: str =None,
        shutdown_delay=None,
        jinja_env=None,
        close_callback=None,
        disable_cache=None,
        reloader:bool = None
        
        ):
    globals.ui.init('web')
    if mode =='app':
        return globals.ui.start("templates/index.html", app=app, reloader=reloader, port=8888)
    if mode =='electron':
        return globals.ui.start("templates/index.html", app=app,mode='electron', reloader=reloader, port=8888)
    if mode =='chrome':
        return globals.ui.start("templates/index.html", app=app,mode='chrome', reloader=reloader, port=8888)
    else:
        return globals.ui.start("templates/index.html", app=app, mode='default', reloader=reloader, port=8888)