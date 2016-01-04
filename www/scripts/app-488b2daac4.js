!function(){"use strict";angular.module("app.chat",["ionic"])}(),function(){"use strict";function t(){var t=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"img/ben.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"img/max.png"},{id:2,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"img/adam.jpg"},{id:3,name:"Perry Governor",lastText:"Look at my mukluks!",face:"img/perry.png"},{id:4,name:"Mike Harrington",lastText:"This is wicked good ice cream.",face:"img/mike.png"}];return{all:function(){return t},remove:function(e){t.splice(t.indexOf(e),1)},get:function(e){for(var o=0;o<t.length;o++)if(t[o].id===parseInt(e))return t[o];return null}}}angular.module("app.chat").factory("Chats",t)}(),angular.module("app.chat").controller("DashCtrl",["$scope",function(t){}]),function(){"use strict";function t(t){var e=this;e.chats=t.all(),e.remove=function(e){t.remove(e)}}t.$inject=["Chats"],angular.module("app.chat").controller("ChatsCtrl",t)}(),function(){"use strict";function t(t,e){var o=this;o.chat=t.get(e.chatId)}t.$inject=["Chats","$stateParams"],angular.module("app.chat").controller("ChatDetailCtrl",t)}(),function(){"use strict";function t(){var t=this;t.settings={enableFriends:!0}}angular.module("app.chat").controller("AccountCtrl",t)}(),function(){"use strict";function t(t,e){var o="app/main/chat/";t.state("tab",{url:"/tab","abstract":!0,templateUrl:o+"templates/tabs.html"}).state("tab.dash",{url:"/dash",views:{"tab-dash":{templateUrl:o+"templates/tab-dash.html",controller:"DashCtrl",controllerAs:"vm"}}}).state("tab.chats",{url:"/chats",views:{"tab-chats":{templateUrl:o+"templates/tab-chats.html",controller:"ChatsCtrl",controllerAs:"vm"}}}).state("tab.chat-detail",{url:"/chats/:chatId",views:{"tab-chats":{templateUrl:o+"templates/chat-detail.html",controller:"ChatDetailCtrl",controllerAs:"vm"}}}).state("tab.account",{url:"/account",views:{"tab-account":{templateUrl:o+"templates/tab-account.html",controller:"AccountCtrl",controllerAs:"vm"}}}),e.otherwise("/tab/dash")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app.chat").config(t)}(),function(){"use strict";angular.module("starter",["ionic","formlyIonic","angularMoment","ngCordova","app.translate","pascalprecht.translate","gettext","app.chat"])}(),function(){"use strict";function t(t,o,a,i,n,r){o.debug("runBlock end"),t.ready(function(){e&&e.plugins&&e.plugins.Keyboard&&e.plugins.Keyboard.hideKeyboardAccessoryBar(!1),e&&n(function(){r.hide(),i.overlaysWebView(!0),i.style(1),i.styleHex(a.color),i.show()},100)})}t.$inject=["$ionicPlatform","$log","AppConfig","$cordovaStatusbar","$timeout","$cordovaSplashscreen"];var e=window.cordova;angular.module("starter").run(t)}(),function(){"use strict";function t(){return{routes:{home:"photogram.home",login:"intro"},color:"#00796B"}}angular.module("starter").constant("AppConfig",t())}(),function(){"use strict";function t(t){t.backButton.text(" ").icon("ion-ios-arrow-left"),t.platform.android.tabs.position("bottom"),t.platform.android.tabs.style("standard"),t.views.maxCache(1)}t.$inject=["$ionicConfigProvider"],angular.module("starter").config(t)}(),function(){"use strict";angular.module("app.translate",["ionic"]).run(["gettextCatalog",function(t){t.setStrings("pt_BR",{"A new password will be sent to your e-mail address":"Uma nova senha será enviada para seu endereço de e-mail",About:"Sobre","Access your accout mail":"Acessar com seu email",Activities:"Atividades","add comment":"adicionou um comentário","Add comment":"Adicionar comentário","add photo":"adicionou uma foto","Are you sure?":"Você tem certeza?","Buy Source Code":"Comprar Código Fonte",Camera:"Tirar foto",Cancel:"Cancelar","Change Image":"Trocar imagem","Change language":"Mudar idioma",Comment:"Comentário",Comments:"Comentários","Complete your Profile":"Complete o seu perfil","Connect your Facebook":"Conectar com o seu Facebook","Create your Social Photo Share with Ionic Framework!":"Crie sua rede social de fotos com Ionic Framework","Delete comment":"Excluir comentário","Delete photo":"Excluir foto","Delete your photo":"Deletar foto",Edit:"Editar","Edit comment":"Editar Comentário","Edit Profile":"Editar perfil","EDIT YOUR PROFILE":"EDITAR SEU PERFIL",Email:"Email","Enabled your camera":"Ative sua câmera",English:"Inglês","Enjoy the most amazing photos":"Compartilhe suas melhores fotos",Enter:"Entrar",Error:"Erro",Facebook:"Facebook","Facebook error":"Erro do Facebook",Feedback:"Feedback","Fill out the fields in red":"Preencha os campos em vermelho","Find people around you and enjoy your photos":"Encontre pessoas ao seu redor e curta as suas fotos",Follow:"Seguir","Follow Users":"Seguir Amigos","Follow your friends and relive their moments":"Siga os seus amigos e reviva seus momentos",Followers:"Seguidores",Following:"Seguindo",Followings:"Seguindo","Forgot your password":"Esqueceu sua senha","Forgot your password?":"Esqueceu sua senha?",Gallery:"Galeria de Fotos","Gallery preview":"Ver Galeria","Grid List":"Lista em Grade",Help:"Ajuda","I'm at":"Eu estou no",Instagram:"Instagram","Install the application and follow me!":"Instale o aplicativo e siga-me!","Invalid Email":"Email inválido","Invalid form":"Formulário inválido","Join me from":"Junte-se a mim no",Like:"Curtir","like photo":"curtiu a foto",Likes:"Curtidas","Link Facebook":"Usar Facebook",Location:"Localização",Logout:"Sair",Map:"Mapa","My Location":"Minha Localização","Nenhuma foto postagem por perto":"Nenhuma foto postagem por perto","No Comments":"Nenhum Comentário","No photo":"Sem foto","No Post":"Nenhuma postagem",Notification:"Notificação",Off:"Desativado",On:"Ativado",or:"ou",Password:"Senha",Photo:"Foto","Photo Album":"Álbum de foto","Photo Camera":"Foto da Câmera","Please enter your email":"Por favor, digite seu e-mail",Popular:"Popular","Portuguese Brazil":"Português - Brasil","Post Photo":"Foto do post",Posts:"Fotos","Privacy Policy":"Política de Privacidade",Profile:"Perfil",Recent:"Recente","Recent List":"Recente",register:"se cadastrou",Register:"Cadastro",registered:"se cadastrou",Remove:"Remover",Report:"Denunciar","Report a Problem":"Reportar um Problema",Save:"Salvar","Save Profile":"Salvar Perfil",Search:"Busca",Send:"Enviar",Settings:"Configurações",Share:"Compartilhar","Share in":"Compartilhar no","Share Photo":"Compartilhar Foto","Share your most amazing moments":"Compartilhe seus melhores momentos","Terms and\n                                                                                                 Conditions":"Termos e ","Terms of Service":"Termos de Serviço","Thank you for sharing!!":"Obrigado por compartilhar!",Thanks:"Obrigado","Thanks for your Feedback":"Obrigado por enviar seu Feedback",Twitter:"Twitter","unlike photo":"tirou o curtir da foto","vm Facebook":"VM Facebook",Whatsapp:"WhatsApp","When creating your account, you agree to our":"Ao criar sua conta, você concorda com nossos","Write a Legend":"Escreva uma legenda","You are sure?":"Você tem certeza?","Your email is already associated with another account, please enter your password":"Seu email já está associado a outra conta, por favor digite sua senha"}),t.setStrings("en_US",{"A new password will be sent to your e-mail address":"A new password will be sent to your e-mail address",About:"About",Account:"Accout",Comment:"Comment",Comments:"Comments","EDIT YOUR PROFILE":"EDIT YOUR PROFILE"})}])}(),angular.module("starter").run(["$templateCache",function(t){t.put("app/main/chat/templates/chat-detail.html",'<ion-view view-title="{{vm.chat.name}}"><ion-content class="padding"><img ng-src="{{vm.chat.face}}" style="width: 64px; height: 64px"><p>{{vm.chat.lastText}}</p></ion-content></ion-view>'),t.put("app/main/chat/templates/tab-account.html",'<ion-view view-title="Account"><ion-content><ion-list><ion-toggle ng-model="vm.settings.enableFriends">Enable Friends</ion-toggle></ion-list></ion-content></ion-view>'),t.put("app/main/chat/templates/tab-chats.html",'<ion-view view-title="Chats" cache-view="false"><ion-content><ion-list><ion-item class="item-remove-animate item-animate1 item-avatar item-icon-right" ng-repeat="chat in vm.chats" type="item-text-wrap" href="#/tab/chats/{{chat.id}}"><img ng-src="{{chat.face}}"><h2>{{chat.name}}</h2><p>{{chat.lastText}}</p><i class="icon ion-chevron-right icon-accessory"></i><ion-option-button class="button-assertive" ng-click="vm.remove(chat)">Delete</ion-option-button></ion-item></ion-list></ion-content></ion-view>'),t.put("app/main/chat/templates/tab-dash.html",'<ion-view view-title="Dashboard"><ion-content class="padding"><div class="list card step1"><div class="item item-divider">Recent Updates</div><div class="item item-body"><div>There is a fire in <b>sector 3</b></div></div></div><div class="list card step2"><div class="item item-divider">Health</div><div class="item item-body"><div>You ate an apple today!</div></div></div><div class="list card step3"><div class="item item-divider">Upcoming</div><div class="item item-body"><div>You have <b>29</b> meetings on your calendar tomorrow.</div></div></div><button class="button button-block button-positive">Olá José</button></ion-content></ion-view>'),t.put("app/main/chat/templates/tabs.html",'<ion-tabs class="tabs-icon-top tabs-positive tabs-striped"><ion-tab title="{{ \'Status\' | translate }}" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong" ui-sref="tab.dash"><ion-nav-view name="tab-dash"></ion-nav-view></ion-tab><ion-tab title="{{ \'Chats\' | translate }}" icon-off="ion-ios-chatboxes-outline" icon-on="ion-ios-chatboxes" ui-sref="tab.chats"><ion-nav-view name="tab-chats"></ion-nav-view></ion-tab><ion-tab title="{{ \'Account\' | translate }}" icon-off="ion-ios-gear-outline" icon-on="ion-ios-gear" ui-sref="tab.account"><ion-nav-view name="tab-account"></ion-nav-view></ion-tab></ion-tabs>')}]);