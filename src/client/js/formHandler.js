function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    let text_check = Client.checkForName(formText)

    if (text_check) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/key')
        .then(res => res.json())
        .then(function(res) {

            console.log(formText)
            const formdata = new FormData();
            formdata.append("key", res.key)
            formdata.append("txt", formText)
            formdata.append("lang", "en");  
            
            const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            return fetch('https://api.meaningcloud.com/sentiment-2.1', requestOptions)
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res)

            // Create HTML elements
            let agreement = document.createElement('p')
            agreement.innerHTML = "Is there agreement?: " + res.agreement

            let irony = document.createElement('p')
            irony.innerHTML = "Is it ironic?: " + res.irony

            agreement.className = 'results-item'
            irony.className = 'results-item'

            let results = document.getElementById('results')
            results.appendChild(agreement)
            results.appendChild(irony)
        })

        return true
    }
}

export { handleSubmit }
