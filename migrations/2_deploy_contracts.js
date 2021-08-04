var Token1=artifacts.require ("./Utrecht1.sol");
var Token2=artifacts.require ("./Utrecht2.sol");
var Token3=artifacts.require ("./Utrecht3.sol");
var Token4=artifacts.require ("./Utrecht4.sol");
var Token5=artifacts.require ("./Utrecht5.sol");

module.exports = function(deployer) {
      deployer.deploy(Token1,10000000000000);
      deployer.deploy(Token2,10000000000000);
      deployer.deploy(Token3,10000000000000);
      deployer.deploy(Token4,10000000000000);
      deployer.deploy(Token5,10000000000000);

} 
