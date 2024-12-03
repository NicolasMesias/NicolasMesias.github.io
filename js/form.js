function menviar() {

    const form = document.getElementById('mcontacto');
    const formData = new FormData(form);

    const formOb = {};
    formData.forEach((value, key) => {
        formOb[key] = value;
    });

    const jsonS = JSON.stringify(formOb, null, 2);
    const blob = new Blob([jsonS], {type: 'application/json'});
}   