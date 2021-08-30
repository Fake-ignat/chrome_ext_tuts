const body = document.querySelector('body')
const scroll = document.getElementsByClassName('scroll-container')[0]
const messages = document.getElementsByClassName('messages-container')[0]
let flag = body.getElementsByClassName("Message message-list-item").length
console.log(flag)

const catchMessages = function (mutations)
{
    mutations.forEach(function(mutation) {
        const newflag = body.getElementsByClassName("Message message-list-item").length
        console.log(`newflag is ${newflag}`);
        if (mutation.addedNodes.length) {
            
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
            const mgs = document.getElementsByClassName('message-date-group')[-1]
            if (mgs) {
                const observer = new MutationObserver(catchMessages)
                observer.observe(mgs, 
                    {
                        childList: true,
                        attributes: true,
                        characterData: true
                    }
                )
            }
        }
        
        
    })
}

const observer1 = new MutationObserver(catchMessages);
const observer2 = new MutationObserver(catchMessages);

const mgs = document.getElementsByClassName('message-date-group')[-1]
            if (mgs) {
                const observer = new MutationObserver(catchMessages)
                observer.observe(mgs, 
                    {
                        childList: true,
                        attributes: true,
                        characterData: true
                    }
                )
            }

observer1.observe(scroll, {
    childList: true,
    attributes: true,
    characterData: true
    })

observer2.observe(messages, {
childList: true,
attributes: true,
characterData: true
})

// const body = document.getElementsByTagName('body')[0]

// body.addEventListener ("click", 
//     function(){

//         const messages = body.getElementsByClassName("Message message-list-item")

//         if (messages.length) {
//             for (let message of messages) {
//                 try {
//                     const text = message.getElementsByClassName("text-content")[0]
//                 console.log(text.textContent.slice(0, -5) + "\n");
//                 }
//                 catch (err) {

//                 }
                

//             }
//         }

       
//     }
// , false);


