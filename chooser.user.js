// ==UserScript==
// @name         Custom Tag Badge Chooser
// @version      1
// @description  Track a tag badge in anything!
// @author       a stone arachnid
// @match        https://*.stackoverflow.com/users/*/*
// @match        https://*.stackexchange.com/users/*/*
// @match        https://*.askubuntu.com/users/*/*
// @match        https://*.serverfault.com/users/*/*
// @match        https://*.superuser.com/users/*/*
// @match        https://*.mathoverflow.net/users/*/*
// @match        https://*.stackapps.com/users/*/*
// @grant        none
// @require  https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';
    let _k =`
    <div class="grid fd-column gs12 gsy">
        <div class="grid--cell">
            <span class="badge-tag">
                <span class="badge3"></span> <input type="text" id="GM_custom_input" class="p4" maxlength="35" placeholder="custom badge here..." />
            </span>
        </div>
        <div class="grid--cell">
            <div class="grid fd-column mb4 zero">
                <div class="grid--cell mb2 fs-fine fc-light">0/100 score</div>
                <div class="grid--cell s-progress">
                    <div class="s-progress--bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="width: 0%;"></div>
                </div>
            </div>
            <div class="grid fd-column zero">
                <div class="grid--cell mb2 fs-fine fc-light">0/20 answers</div>
                <div class="grid--cell s-progress">
                    <div class="s-progress--bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="width: 0%;"></div>
                </div>
            </div>
        </div>
    </div>
    <p class="mb0 pt16 pb12 fc-dark lh-sm"></p>
`;
    waitForKeyElements("#popup-next-badge",function(jNode){
        var x = $("<div>").attr("id","GM_custom_tag_badge").attr("data-badge-database-name","custom").html(_k)
            .addClass("grid--cell ps-relative -list-item js-badge-progress  js-badge-class-Bronze");
        $(jNode).find(".js-badge-list-container").append(x);
        $(jNode).find("#GM_custom_input").click(
            e=>{e.stopImmediatePropagation();return false}
        ).on("input",()=>{
            $("#GM_custom_tag_badge").attr("data-badge-database-name",$("#GM_custom_input").val());
            console.log($("#GM_custom_input").val());
        });
    });
})();
