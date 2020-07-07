//contoller folder
const Sequelize = require('sequelize');
const Hero = require('../models/tablemodel')
const Op = Sequelize.Op



exports.customer_get=(req,res)=>{
  const name= req.query.name
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  try{
    Hero.findAll({where: condition})
        .then((data)=>{
        res.send(data)
        console.log("hello");
  });
  }
    catch(err){
      res.send('Error found:'+res)
    }
  }

exports.customer_post = async (req,res) => {
  const hero = new Hero({
      name: req.query.name,
      type: req.query.power
  })

  try{
      const a1 =  await hero.save() 
      res.json(a1)
  }catch(err){
      res.send('Error')
  }
}

exports.customer_patch = async(req,res)=> {
  try{
      const hero = await Hero.findById(req.params.id) 
      hero.categtory = req.body.sub
      const a1 = await hero.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

}

