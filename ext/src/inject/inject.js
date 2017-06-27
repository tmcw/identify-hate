chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // Determine whether we're on a profile page, by comparing the URL
      // against a pattern.
      var profileRegex = /^\/profile\/([\d\-]+)$/;
      var profileIdResult = document.location.pathname.match(profileRegex);
      if (profileIdResult == null) return;
      var profileId = profileIdResult[1];

      // A list of all identified hate groups that match with GuideStar charities
      var hateGroups = [
        {
          guideStarId: "26-0772227",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/act-america"
        },
        {
          guideStarId: "54-1660459",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/alliance-defending-freedom"
        },
        {
          guideStarId: "42-1542666",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-border-patrolamerican-patrol"
        },
        {
          guideStarId: "64-0607275",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-family-association"
        },
        {
          guideStarId: "61-6212159",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/american-renaissance"
        },
        {
          guideStarId: "52-1601976",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/center-security-policy"
        },
        {
          guideStarId: "36-3354434",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/council-conservative-citizens"
        },
        {
          guideStarId: "52-1792772",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/family-research-council"
        },
        {
          guideStarId: "52-1136126",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/federation-american-immigration-reform"
        },
        {
          guideStarId: "59-2986294",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/liberty-counsel"
        },
        {
          guideStarId: "51-0181036",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/pioneer-fund"
        },
        {
          guideStarId: "33-0055498",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/traditional-values-coalition"
        },
        {
          guideStarId: "22-3691487",
          splcUrl: "https://www.splcenter.org/fighting-hate/extremist-files/group/vdare"
        },
        {
          guideStarId: "26-4268957",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "95-4194642",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "46-3647313",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "39-1785920",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2012/wisconsin%E2%80%99s-institute-science-and-technology-fears-vatican-conspiracy"
        },
        {
          guideStarId: "95-6121940",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2010/18-anti-gay-groups-and-their-propaganda"
        },
        {
          guideStarId: "87-0713874",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "26-2993939",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "20-2681812",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "91-1823641",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "59-3663884",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2013/touring-third-reich"
        },
        {
          guideStarId: "86-0932183",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2007/12-anti-semitic-radical-traditionalist-catholic-groups"
        },
        {
          guideStarId: "47-0886878",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "68-0643445",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "54-1756470",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "37-1265883",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "37-1265883",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "75-1416858",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "48-1183942",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "68-0643445",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "27-2518993",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "45-2734488",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "52-1304849",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "31-1075684",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "36-3354510",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "47-0649778",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "94-2581509",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "94-2581509",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "52-1449368",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "36-3354510",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "26-0845411",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "26-0845411",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "94-2231771",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "81-1969574",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "52-1469956",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "30-0116360",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "30-0116360",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "52-1112449",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        },
        {
          guideStarId: "47-2289987",
          splcUrl: "https://www.splcenter.org/fighting-hate/intelligence-report/2017/active-hate-groups-2016"
        }
      ];

      // Figure out if the page we're on matches one of those hate groups.
      for (var i = 0; i < hateGroups.length; i++) {
        if (hateGroups[i].guideStarId === profileId) {
          // If it does, insert a warning onto the page with a link to more
          // information, and then exit.
          var splcUrl = hateGroups[i].splcUrl;
          var profileHeader = document.getElementById("profileHeader");
          var warningDiv = profileHeader.appendChild(
            document.createElement("div")
          );
          profileHeader.insertBefore(warningDiv, profileHeader.children[0]);
          var warningLink = warningDiv.appendChild(document.createElement("a"));
          warningDiv.style.cssText =
            "background:#d05330;color:#fff;padding:10px;text-align:center;margin:10px;";
          warningLink.setAttribute("href", splcUrl);
          warningLink.style.cssText = "color:#fff";
          warningLink.innerText =
            "⚠️ This organization has been identified as a hate group by the SPLC. Click here for more details.";
          return;
        }
      }

      // If this isn't a hate group, this extension doesn't do anything.
    }
  }, 10);
});
