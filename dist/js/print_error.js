/**
 * when calculate button clicked, if doesn't meet validation, then triggers event listener that sets the class of the error box to no longer be hidden,
 * and prints error to screen
 * @param {resultsBox} contains the results box to be hidden (as no result due to error)
 * @param {errorBox} contains the error box to be shown
 * @param {error} contains a string with error message in.
 */
function printError(resultsBox, errorBox, error) {
    resultsBox.classList.add('hidden');
    errorBox.classList.remove('hidden');
    var errorContent = "<p>" + error + "</p>";
    errorBox.innerHTML = errorContent;
}
;
