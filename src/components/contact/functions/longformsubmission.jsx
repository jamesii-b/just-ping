async function bFormSubmit(name,
    email,
    companyName,
    details,
    service,
) {
    const formData = {

        name: name,
        email: email,
        companyName: companyName,
        details: details,
        service: service,
    }


    try {
        /* 
                FORM URL here */
        const response = await fetch('https://nepcodes-api.azurewebsites.net/api/submit-form', {
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

export default bFormSubmit;
