

document.getElementById("dateOfOrder").valueAsDate = new Date();


function validateForm(form) {
    var valid = true;

    // checking the mandatory fields
    if (form.clubName.value.length === 0) {
        valid = false;
        document.getElementById("clubName_mandatory_input").style.display = "inline-block";
    }

    if (form.clubNumber.value.length === 0) {
        valid = false;
        document.getElementById("clubNumber_mandatory_input").style.display = "inline-block";
    }

    if (form.postalAddress.value.length === 0) {
        valid = false;
        document.getElementById("postalAddress_mandatory_input").style.display = "inline-block";
    }

    if (form.postCode.value.length === 0) {
        valid = false;
        document.getElementById("postCode_mandatory_input").style.display = "inline-block";
    }

    if (form.contactName.value.length === 0) {
        valid = false;
        document.getElementById("contactName_mandatory_input").style.display = "inline-block";
    }

    if (form.contactPhone.value.length === 0) {
        valid = false;
        document.getElementById("contactPhone_mandatory_input").style.display = "inline-block";
    }


    // checking radio buttons
    if (!form.paymentMethod.value.length) {
        valid = false;
        document.getElementById("radio-span").style.display = "inline-block";
    }

    // checking card input radio
    if (form.paymentMethod.value == "cardPayment" && !form.cardRadio.value.length) {
        valid = false;
        console.log(form.cardRadio.value.length);
        document.getElementById("radio-span-card").style.display = "inline-block";
    }




    if (!valid) {
        document.getElementById("no-submission").style.display = "inline-block";
    }
    return valid;
}

function changeCard() {
    document.getElementById("isCard").style.display = "inline-block";
}

function hideCard() {
    document.getElementById("isCard").style.display = "none";
}

function update(element) {
    var userBadges_id = ["userBadge_1", "userBadge_2", "userBadge_3", "userBadge_4", "userBadge_5"];
    var userBadges = [];
    for (userBadge of userBadges_id) {
        userBadges.push(document.getElementById(userBadge).value)
    }
    console.log(userBadges);


    var value = element.value;
    console.log(value);

    let total = 0;
    let count_A = 0;
    let total_A = 0;
    let count_B = 0;
    let total_B = 0;
    let count_C = 0;
    let total_C = 0;

    for (userBadge of userBadges) {
        if (userBadge == "A") {
            total = total + 7.5;
            count_A++;
            total_A = count_A * 7.5;

            document.getElementById("badgeA").value = count_A.toString();
            document.getElementById("totalA").value = total_A.toString();
        }
        if (userBadge == "B") {
            total = total + 8.0;
            count_B++;
            total_B = count_B * 8.0;

            document.getElementById("badgeB").value = count_B.toString();
            document.getElementById("totalB").value = total_B.toString();
        }
        if (userBadge == "C") {
            total = total + 10.0;
            count_C++;
            total_C = count_C * 10.0;

            document.getElementById("badgeC").value = count_C.toString();
            document.getElementById("totalC").value = total_C.toString();
        }

    }

    //  clean up
    if (!count_A) {
        document.getElementById("badgeA").value = "";
        document.getElementById("totalA").value = "";
    }
    if (!count_B) {
        document.getElementById("badgeB").value = "";
        document.getElementById("totalB").value = "";
    }
    if (!count_C) {
        document.getElementById("badgeC").value = "";
        document.getElementById("totalC").value = "";
    }

    let postage = 0;
    if (count_A + count_B + count_C == 0) {
        document.getElementById("twoBox").value = "";
        document.getElementById("oneBox").value = "";
        document.getElementById("subTotal").value = "";
        document.getElementById("creditFee").value = "";
        document.getElementById("total").value = "";
        return;
    }
    else if (count_A + count_B + count_C <= 4) {
        postage = 4.00;
        document.getElementById("oneBox").value = postage.toString();

        document.getElementById("twoBox").value = "0";
    }
    else {
        postage = 8.00;
        document.getElementById("twoBox").value = postage.toString();

        document.getElementById("oneBox").value = "0";
    }
    total = postage + total;

    console.log(total);
    document.getElementById("subTotal").value = total.toString();

    let fee = (total * 0.025).toFixed(2);
    document.getElementById("creditFee").value = fee.toString();

    let finalTotal = total + (total * 0.025);
    document.getElementById("total").value = finalTotal.toFixed(2).toString();

}
