const app = new Vue(
    {
        el: '#root',
        data: {
            title: 'Compila la tua card!',
            heading: 'Henlo ',
            userInput: '',
            userInputSent: '',
            content: '',
            image: '',
            imageSrc: '',
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
                    this.title = 'Card compilata con successo!';
                } else{
                    this.title = 'Manca ancora qualcosa!';
                }
            }

        },
    }
)
