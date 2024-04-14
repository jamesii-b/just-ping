async function submitForm(selectedOption, inputValue, countryCode) {
    if (inputValue === '' || inputValue === null || inputValue === undefined || inputValue.length === 0) {
        console.log('Empty form submission');
        throw new Error('empty');
    }
    let formData = {}
    if (selectedOption === 'email') {
        formData = {
            email: inputValue,

        }
    }
    else if (selectedOption === 'mobile') {
        formData = {
            phone: countryCode + inputValue,

        }
    }

    try {
        /* 
                FORM URL here */
        const response = await fetch('https://nepcodes-api.azurewebsites.net/api/shortform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log(response.status);
        if (response.status == 200) {
            console.log("ok")
            return true;
        } else {
            return false;
        }
    } catch {
        return false;
    }
};

export default submitForm;
