document.addEventListener("DOMContentLoaded", () => {
  const loadHeader = async () => {
    const response = await fetch("/components/header.html");
    const headerContent = await response.text();
    document.querySelector("header").innerHTML = headerContent;

    const path = window.location.pathname;
    const currentPage = path.substring(
      path.lastIndexOf("/") + 1,
      path.lastIndexOf(".")
    );

    const activeLink = document.querySelector(
        `a[data-page="${currentPage}"] .desktop-menu-button`
      );
      if (activeLink) {
        activeLink.classList.add("active");
        console.log("Active link set for:", currentPage);
      }

      // This is the part that updates the page title
      const pageTitleElement = document.getElementById("page-title");
      if (pageTitleElement) {
        const metaTag = document.querySelector("meta[name='page-title']");
        if (metaTag) {
          const pageTitle = metaTag.getAttribute("content");
          console.log("Meta tag found, page title is:", pageTitle);
          pageTitleElement.textContent = pageTitle;
          pageTitleElement.classList.add("active"); // Ensure it is visible
          console.log("Page title set to:", pageTitle);
        } else {
          console.log("Meta tag with name 'page-title' not found");
        }
      } else {
        console.log("#page-title element not found");
      }
    } catch (error) {
      console.error("Error loading header:", error);
    }
  };

  loadHeader();
});
