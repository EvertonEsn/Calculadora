// function criaCalculadora(){
//   return{
//     display: document.querySelector('.display'),
//     clear: document.querySelector('.btn-clear'),

//     inicia() {
//       this.cliqueBotoes()
//       this.pressionaEnter()
//     },

//     pressionaEnter(){
//       this.display.addEventListener('keyup', e => {
//         if(e.keyCode === 13){
//           this.realizaConta()
//         }
//       })
//     },

//     realizaConta() {
//       let conta = this.display.value

//       try {
//         conta = eval(conta)

//         if(!conta){
//           alert('conta inválida')
//           return
//         }

//         this.display.value = String(conta)
//       } catch(e){
//         alert('Conta inválida')
//       }
//     },

//     clearDisplay(){
//       this.display.value = ''
//     },

//     apagaUm(){
//       this.display.value = this.display.value.slice(0, -1)
//     },

//     cliqueBotoes(){
//       document.addEventListener('click', function(e) {
//         const el = e.target

//         if(el.classList.contains('btn-num')){
//           this.btnParaDisplay(el.innerText);
//         }

//         if(el.classList.contains('btn-clear')){
//           this.clearDisplay()
//         }

//         if(el.classList.contains('btn-del')){
//           this.apagaUm()
//         }

//         if(el.classList.contains('btn-eq')){
//           this.realizaConta()
//         }
//         this.display.focus()

//       }.bind(this)) //usado para referenciar a calculadora e não o document
//     },
//     btnParaDisplay(valor) {
//       this.display.value += valor
//     },

//     }
//   }

// const calculadora = criaCalculadora()
// calculadora.inicia()

function Calculadora() {
  this.display = document.querySelector('.display');
  this.clear = document.querySelector('.btn-clear');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert('conta inválida');
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert('Conta inválida');
      return;
    }
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.cliqueBotoes = function () {
    document.addEventListener(
      'click',
      function (e) {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
        this.display.focus();
      }.bind(this)
    ); //usado para referenciar a calculadora e não o document
  };

  this.btnParaDisplay = valor => {
    this.display.value += valor;
  };
}

const calc1 = new Calculadora();
calc1.inicia();
