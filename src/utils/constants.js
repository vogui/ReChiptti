const newAnimation = require('../../assets/new.json');
const topAnimation = require('../../assets/top.json');
const hotAnimation = require('../../assets/hot.json');
const popAnimation = require('../../assets/pop.json');

export const ANIMATIONS={
  "New":newAnimation,
  "Top":topAnimation,
  "Controversial":popAnimation,
  "Hot":hotAnimation,
}

export const SCREENS = [
    {name:"New"},
    {name:"Top"},
    {name:"Controversial", title:"Popular"},
    {name:"Hot"}
]
