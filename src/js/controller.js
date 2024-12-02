
//imports
import * as model from './model.js';
import recipeView from './components/recipeView.js';
import searchView from './components/searchView.js';
import resultsView from './components/resultsView.js';
import paginationView from './components/paginationView.js';
//polyfilling
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//first API call


if(module.hot){
  module.hot.accept;

}
const controlRecipe = async function () {
  try{
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();
    
    //load recipe
    await model.loadRecipe(id);

    //rending recipe
    recipeView.render(model.state.recipe);   
     
  }catch (err){
    recipeView.renderError();
  }
  
};

const controlSearchRes = async function () {
  try{

    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if(!query) return;
    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultPage());
  //  console.log(model.state.search.results);

    paginationView.render(model.state.search);

  }catch(err){
    console.log(err);
  }
  
}

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultPage(goToPage));
  paginationView.render(model.state.search);

}

function init_(){
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchRes);
  paginationView.addhandlerClick(controlPagination)
}

init_();

// function init_(){
//   displayRecipe();

// }

// init_();

//implementing event handlers in the MVC architecture

//publisher subscriber pattern --> handling event hanlers in views with main func in controller

