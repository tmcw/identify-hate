chrome.extension.sendMessage({}, function(response) {
  // A list of all identified hate groups that match with GuideStar charities
  var hateGroupIdx = {
    "26-0772227": {
      name: "ACT FOR AMERICA INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/act-america"
    },
    "54-1660459": {
      name: "ALLIANCE DEFENDING FREEDOM",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/alliance-defending-freedom"
    },
    "42-1542666": {
      name: "American Border Patrol",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-border-patrolamerican-patrol"
    },
    "47-0886878": {
      name: "American College of Pediatricians",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "64-0607275": {
      name: "AMERICAN FAMILY ASSOCIATION INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-family-association"
    },
    "27-2518993": {
      name: "AMERICAN FREEDOM DEFENSE INITIATIVE",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1304849": {
      name: "American Immigration Control Foundation Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "58-1374143": {
      name: "AMERICAN VISION INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2015/active-anti-lgbt-groups"
    },
    "54-1829289": {
      name: "Americans for Truth About Homosexuality",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2010/18-anti-gay-groups-and-their-propaganda"
    },
    "36-3897842": {
      name: "Bill Keller Ministries",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "94-2581509": {
      name: "CALIFORNIANS FOR POPULATION STABILIZATION INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1449368": {
      name: "CENTER FOR IMMIGRATION STUDIES INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1601976": {
      name: "Center for Security Policy Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/center-security-policy"
    },
    "95-6121940": {
      name: "Chalcedon Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2010/18-anti-gay-groups-and-their-propaganda"
    },
    "54-1756470": {
      name: "CHRISTIAN ACTION NETWORK",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "31-1075684": {
      name: "CITIZENS FOR COMMUNITY VALUES",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "95-4194642": {
      name: "DAVID HOROWITZ FREEDOM CENTER",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "74-3068189": {
      name: "FAITH 2 ACTION INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1792772": {
      name: "FAMILY RESEARCH COUNCIL INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/family-research-council"
    },
    "47-0649778": {
      name: "FAMILY RESEARCH INSTITUTE INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "20-3779221": {
      name: "Family Security Foundation Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1136126": {
      name: "Federation for American Immigration Reform",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/federation-american-immigration-reform"
    },
    "87-0713874": {
      name: "FITZGERALD GRIFFIN FOUNDATION",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "59-3283890": {
      name: "Florida Family Association Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "74-2138183": {
      name: "Friendship Assembly of God",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "54-2057581": {
      name: "IHS PRESS",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "37-1265883": {
      name: "ILLINOIS FAMILY INSTITUTE",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1469956": {
      name: "Immigration Reform Law Institute",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "86-0932183": {
      name: "IN THE SPIRIT OF CHARTRES COMMITTEE INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2007/12-anti-semitic-radical-traditionalist-catholic-groups"
    },
    "59-3838518": {
      name: "Israel School of Universal Practical Knowledge",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "20-0516499": {
      name: "Israel United in Christ Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "26-0371995": {
      name: "KINGDOM TREASURE MINISTRIES INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "59-2986294": {
      name: "Liberty Counsel Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/liberty-counsel"
    },
    "62-1608693": {
      name: "Mary Noel Kershaw Foundation",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "31-1597212": {
      name: "Mission America",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    // Unconfirmed: no public record of this organization being included in the list
    // "46-4432788": {
    //   name: "NATIONAL COALITION FOR ISSUE REFORM ACTION"
    // },
    "52-1259838": {
      name: "NATIONAL POLICY INSTITUTE INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "91-1823641": {
      name: "PACIFIC JUSTICE INSTITUTE",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "30-0116360": {
      name: "PASS THE SALT MINISTRIES INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "75-1416858": {
      name: "Probe Ministries International Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "52-1112449": {
      name: "PUBLIC ADVOCATE OF THE UNITED STATES",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
    },
    "80-0211871": {
      name: "Ruth Institute Inc",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "46-3534833": {
      name: "Tea Party Nation Action",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "52-1052524": {
      name: "THE COUNCIL FOR SOCIAL AND ECONOMIC STUDIES INC",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
    },
    "33-0055498": {
      name: "Traditional Values Coalition",
      splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/traditional-values-coalition"
    },
    "57-0658997": {
      name: "UNITED FAMILIES FOUNDATION",
      splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2016/active-hate-groups-united-states-2015"
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
      pageEin = profileIdResult[1];
    } else {
      // Don't show this on search listing pages on charitynavigator
      if (!document.location.search.match(/bay=search\.(profile|summary)/)) {
        return;
      }
      var donateLink = document.querySelector("a[data-ein]");
      if (donateLink) {
        profileIdResult = donateLink.dataset.ein;
      }
      if (profileIdResult === null) return;
      pageEin =
        profileIdResult.substring(0, 2) + "-" + profileIdResult.substring(2);
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
