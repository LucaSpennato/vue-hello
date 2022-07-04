const app = new Vue(
    {
        el: '#root',
        data: {
            title: 'Card compilotron 3000',
            heading: '',
            userInput: '',
            userInputSent: '',
            content: '',
            image: '',
            imageSrc: 'https://www.focus.it/images/2021/11/23/mare_1020x680.jpg',
            contentSaved: '',
        },

        methods: {

            cardCompiler: function(){

                this.userInputSent = this.userInput;
                this.userInput = '';
            
                this.contentSaved = this.content;
                this.content = '';

                this.imageSrc = this.image;
                this.image = '';

                if((this.userInputSent !== '') && (this.contentSaved !== '') && (this.imageSrc !== '')){
                    this.heading = `Henlo ${this.userInputSent}!!`;
                    this.title = `Ciao ${this.userInputSent}, ecco la tua card!`;
                } else{
                    this.title = 'Non hai inserito tutti i dati :/';
                    this.userInputSent = '';
                    this.contentSaved = '';
                    this.imageSrc = '';
                }
            }

        },
    }
)
