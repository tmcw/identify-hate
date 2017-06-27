chrome.extension.sendMessage({}, function(response) {
  // A list of all identified hate groups that match with GuideStar charities
  var hateGroupIdx = {
    "202681812": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "223691487": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/vdare"
    },
    "260772227": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/act-america"
    },
    "260845411": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "262993939": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "264268957": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "272518993": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "300116360": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "311075684": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "330055498": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/traditional-values-coalition"
    },
    "363354434": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/council-conservative-citizens"
    },
    "363354510": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "371265883": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "391785920": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2012/wisconsin%E2%80%99s-institute-science-and-technology-fears-vatican-conspiracy"
    },
    "421542666": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-border-patrolamerican-patrol"
    },
    "452734488": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "463647313": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "470649778": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "470886878": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "472289987": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "481183942": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "510181036": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/pioneer-fund"
    },
    "521112449": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "521136126": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/federation-american-immigration-reform"
    },
    "521304849": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "521449368": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "521469956": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "521601976": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/center-security-policy"
    },
    "521792772": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/family-research-council"
    },
    "541660459": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/alliance-defending-freedom"
    },
    "541756470": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "592986294": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/liberty-counsel"
    },
    "593663884": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2013/touring-third-reich"
    },
    "616212159": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-renaissance"
    },
    "640607275": {
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-family-association"
    },
    "680643445": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "751416858": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "811969574": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "860932183": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2007/12-anti-semitic-radical-traditionalist-catholic-groups"
    },
    "870713874": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "911823641": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "942231771": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "942581509": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "954194642": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "956121940": {
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2010/18-anti-gay-groups-and-their-propaganda"
    }
  };

  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState !== "complete") return;

    clearInterval(readyStateCheckInterval);

    // Determine whether we're on a profile page, by comparing the URL
    // against a pattern.
    var profileRegex, profileIdResult, pageEin;
    if (document.location.hostname === "www.guidestar.org") {
      profileRegex = /^\/profile\/([\d\-]+)$/;
      profileIdResult = document.location.pathname.match(profileRegex);
      if (profileIdResult == null) return;
      pageEin = profileIdResult[1].replace("-", "");
    } else {
      profileRegex = /ein=(\d+)/;
      profileIdResult = document.location.search.match(profileRegex);
      if (profileIdResult == null) return;
      pageEin = profileIdResult[1];
    }

    var info = hateGroupIdx[pageEin];
    // Figure out if the page we're on matches one of those hate groups.
    if (info == undefined) return;
    // If it does, insert a warning onto the page with a link to more
    // information, and then exit.
    var splcUrl = info.splcUrl;
    var warningDiv = document.createElement("div");
    var warningLink = warningDiv.appendChild(document.createElement("a"));
    warningDiv.style.cssText =
      "background:#d05330;color:#fff;padding:10px;text-align:center;";
    warningLink.setAttribute("href", splcUrl);
    warningLink.style.cssText = "color:#fff";
    warningLink.innerText =
      "⚠️ This organization has been identified as a hate group by the SPLC. Click here for more details.";

    if (document.location.hostname === "www.guidestar.org") {
      warningDiv.style.margin = "20px 10px";
      var profileHeader = document.getElementById("profileHeader");
      var warningDiv = profileHeader.appendChild(warningDiv);
      profileHeader.insertBefore(warningDiv, profileHeader.children[0]);
    } else {
      var profileHeader = document.getElementById("maincontent");
      var warningDiv = profileHeader.appendChild(warningDiv);
      profileHeader.insertBefore(warningDiv, profileHeader.children[0]);
    }
  }, 10);
});
