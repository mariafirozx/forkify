import icons from 'url:../../img/icons.svg'; 


export default class View{

    _data;

    render(data){
        if (!data || Array.isArray(data) && !data.length) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup(); 
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }


    _clear(){
        this._parentEl.innerHTML = '';
    }

    renderSpinner(){
        const spinner = `
        <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
        </div>`;
      
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', spinner);
      
    }
    renderError(msg = this._errMsg){
     const err=  `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${msg}</p>
        </div>`

        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', err);
    }

    renderMsg(msg = this._msg){
      const message=  `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
          <p>${msg}</p>
      </div>`
 
         this._clear();
         this._parentEl.insertAdjacentHTML('afterbegin', message);
     }

}