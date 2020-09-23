module.exports = function () {
    return ` <!DOCTYPE html>
<html>

<head>
</head>

<body>
    <script src="https://secure.ewaypayments.com/scripts/eCrypt.js"
   class="eway-paynow-button"
   data-publicapikey="epk-ECAB64FB-46A4-457C-82AD-E5C4A296C2AB"
   data-amount="1000"
   data-currency="AUD" 
   data-resulturl="http://www.eway.com.au/shared-demo/results.aspx">
</script>
</body>

</html>`;

};