require.config({paths:{sulucontent:"../../sulucontent/dist","type/resourceLocator":"../../sulucontent/dist/validation/types/resourceLocator","type/textEditor":"../../sulucontent/dist/validation/types/textEditor","type/smartContent":"../../sulucontent/dist/validation/types/smartContent","type/block":"../../sulucontent/dist/validation/types/block"}}),define({name:"Sulu Content Bundle",initialize:function(a){"use strict";function b(){return c.sulu.getUserSetting("contentLanguage")||c.sulu.user.locale}var c=a.sandbox;a.components.addSource("sulucontent","/bundles/sulucontent/dist/components"),c.mvc.routes.push({route:"content/contents/:webspace",callback:function(a){var d=b();c.emit("sulu.router.navigate","content/contents/"+a+"/"+d)}}),c.mvc.routes.push({route:"content/contents/:webspace/:language",callback:function(a,b){this.html('<div data-aura-component="content@sulucontent" data-aura-webspace="'+a+'" data-aura-language="'+b+'" data-aura-display="column"/>')}}),c.mvc.routes.push({route:"content/contents/:webspace/:language/add::id/:content",callback:function(a,b,c,d){this.html('<div data-aura-component="content@sulucontent" data-aura-webspace="'+a+'" data-aura-language="'+b+'" data-aura-content="'+d+'" data-aura-parent="'+c+'"/>')}}),c.mvc.routes.push({route:"content/contents/:webspace/:language/add/:content",callback:function(a,b,c){this.html('<div data-aura-component="content@sulucontent" data-aura-webspace="'+a+'" data-aura-language="'+b+'" data-aura-content="'+c+'"/>')}}),c.mvc.routes.push({route:"content/contents/:webspace/edit::id/:content",callback:function(a,d,e){var f=b();c.emit("sulu.router.navigate","content/contents/"+a+"/"+f+"/edit:"+d+"/"+e)}}),c.mvc.routes.push({route:"content/contents/:webspace/:language/edit::id/:content",callback:function(a,b,c,d){this.html('<div data-aura-component="content@sulucontent" data-aura-webspace="'+a+'" data-aura-language="'+b+'" data-aura-content="'+d+'" data-aura-id="'+c+'" data-aura-preview="true"/>')}})}});