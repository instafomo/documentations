if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
      const header =
        document.querySelector(".navbar__inner") ||
        document.querySelector(".navbar");

      if (header) {
        observer.disconnect();

        // Create container for Orama search bar
        const searchContainer = document.createElement("div");
        searchContainer.setAttribute("id", "orama-ui-container");
        searchContainer.style.marginLeft = "auto";
        searchContainer.style.display = "flex";
        searchContainer.style.alignItems = "center";

        searchContainer.innerHTML = `
          <div id="orama-ui">
            <orama-search-button onClick="open = !open">Ask Ai..</orama-search-button>
            <orama-search-box style="width: 500px;"></orama-search-box>
          </div>
        `;

        header.appendChild(searchContainer);
        console.log("Search bar appended successfully to the header");

        // Configure the Orama search box
        const configureSearchBox = () => {
          const searchBox = document.querySelector("orama-search-box");
          if (searchBox) {
            Object.assign(searchBox, {
              resultsMap: {
                path: "path",
                section: "title",
                description: "content",
              },
              colorScheme: "system",
              themeConfig: {},
              suggestions: [
                "How to integrate instafomo with my website?",
                "How to create Notification?",
                "What is Instafomo Pixel code?",
                "How to integrate coupon code popup on my website?",
              ],
              open: false,
              index: {
                endpoint:
                  "https://cloud.orama.run/v1/indexes/docs-instafomo-com-bemjs8",
                api_key: "hVeZRz1Y9Ig51NvIgGN3M5AkOT2mdVPG",
              },
            });
          } else {
            console.error("Orama search box element not found!");
          }
        };

        configureSearchBox();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}
