"use strict";(self["webpackChunkap_portal"]=self["webpackChunkap_portal"]||[]).push([[7],{760:function(t,e,s){s.d(e,{Z:function(){return c}});var a=s(3396),l=s(7139);const n=t=>((0,a.dD)("data-v-3696d6fc"),t=t(),(0,a.Cn)(),t),o={class:"lines"},i=n((()=>(0,a._)("span",null,"~",-1)));function r(t,e,s,n,r,p){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("h3",null,(0,l.zw)(s.title),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.lines,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"copy-line",key:t},[i,(0,a.Uk)(" "+(0,l.zw)(t),1)])))),128))])}var p={props:{title:String,lines:Array}},u=s(89);const d=(0,u.Z)(p,[["render",r],["__scopeId","data-v-3696d6fc"]]);var c=d},3007:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=s(3396);const l=(0,a._)("h2",null,"Настройка Pop!_OS (Ubuntu)",-1),n={class:"content"};function o(t,e,s,o,i,r){const p=(0,a.up)("terminal-line");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.blocks,(t=>((0,a.wg)(),(0,a.j4)(p,{key:t.title,title:t.title,lines:t.lines},null,8,["title","lines"])))),128))])],64)}var i=s(760),r={components:{TerminalLine:i.Z},data(){return{blocks:[{title:"Первоначальная настройка",lines:["sudo apt-get update","sudo apt-get upgrade","sudo apt install telegram-desktop docker docker-compose steam filezilla discord golang vscodium-bin","sudo apt install flatpak","flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo"]},{title:"ZSH",lines:["sudo apt install zsh",'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"']},{title:"NVM",lines:["curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash ","source ~/.bashrc"]},{title:"Touchegg",lines:["sudo add-apt-repository ppa:touchegg/stable","sudo apt update","sudo apt install touchegg","sudo apt install touche"]},{title:"Alias",lines:["sudo nano .zshrc",'alias vpn="sudo openfortivpn -c /etc/openfortivpn/my_config" ','alias sshdev="ssh popov@172.16.31.17"','alias sshprod="ssh popov@172.16.31.16"','alias ll="ls -la"','alias arm="cd projects/arm-content && code . && cd frontside && npm run serve"','alias update="sudo apt update"','alias upgrade="sudo apt upgrade"']},{title:"Установка .deb пакетов",lines:["sudo apt install < PackageName >"]},{title:"Ссылки для скачивания пакетов",lines:["https://github.com/balena-io/etcher/releases/","https://dbeaver.io/download/"]},{title:"Настройки клавиатуры ARDOR",lines:["sudo nano /etc/modprobe.d/hid_apple.conf","options hid_apple fnmode=2"]}]}}},p=s(89);const u=(0,p.Z)(r,[["render",o]]);var d=u}}]);
//# sourceMappingURL=7.97f61078.js.map