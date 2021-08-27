
const body = document.getElementsByTagName('body')[0]

body.addEventListener ("click", 
    function(){

        const messages = body.getElementsByClassName("Message message-list-item")

        if (messages.length) {
            for (let message of messages) {
                try {
                    const text = message.getElementsByClassName("text-content")[0]
                console.log(text.textContent.slice(0, -5) + "\n");
                }
                catch (err) {

                }
                

            }
        }

       
    }
, false);


