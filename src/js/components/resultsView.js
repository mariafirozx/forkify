import View from './View.js';
import icons from 'url:../../img/icons.svg'; 


class ResultsView extends View{


    _parentEl = document.querySelector('.results');

    _errMsg = 'We could not find the recipe you are looking for.. Please try again!';
    _msg = 'Start by searching for a recipe or an ingredient. Have fun!';

    _generateMarkup(){
        return this._data.map(this._generateMarkupPrev).join('')
    }

    _generateMarkupPrev(res){

        return `
         <li class="preview">
            <a class="preview__link preview__link" href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.image}" alt=${res.title} />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
              </div>
            </a>
          </li>
        `

    }

}

export default new ResultsView();