
import Home from '../containers/Home'
import Docs from '../containers/Docs'
import Tutorial from '../containers/Tutorial'
import Help from '../containers/Help'
import Login from '../containers/Login'


export const TypeRuote ={
    NAVBAR :'NAVBAR',
    MENU :'MENU',
};

export const RouteList = [
  { name: "Home", component: Home, path: "/", exact: true ,type:TypeRuote.NAVBAR , auth:false},
  { name: "Docs", component: Docs, path: "/docs" ,type:TypeRuote.NAVBAR,auth:true},
  { name: "Tutorial", component: Tutorial, path: "/tutorial" ,type:TypeRuote.NAVBAR ,auth:true},
  { name: "Help", component: Help, path: "/help" ,type:TypeRuote.NAVBAR ,auth:false},
  { name: "Login", component: Login, path: "/login" ,auth:false}
];

export const NavItems = RouteList.filter(navitem=>navitem.type===TypeRuote.NAVBAR);


