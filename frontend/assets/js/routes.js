document.addEventListener('DOMContentLoaded', () => {
    const pageContentCenter = document.querySelector(".page-content-center");

    function navigateTo(url) {
        if (location.pathname !== url) {
            history.pushState(null, null, url);
            router();
        }
    }

    async function loadContent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            pageContentCenter.innerHTML = data;
        } catch (error) {
            console.error(error);
        }
    }

    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    }

    function router() {
        const path = location.pathname;

        switch (path) {
            
            case "/dashboard":
                loadContent("frontend/html/dashboard.html");
                break;
            case "/lead-registration":
                loadContent("frontend/html/lead-registration.html");
                break;
            case "/lead-management":
                loadContent("frontend/html/lead-management.html");
                loadScript("frontend/assets/js/leadManagement.js");
                break;
            case "/broker-registration":
                loadContent("frontend/html/broker-registration.html");
                break;
            case "/broker-management":
                loadContent("frontend/html/broker-management.html");
                break;
                case "/property-registration":
                loadContent("frontend/html/property-registration.html");
                break;
            case "/property-management":
                loadContent("frontend/html/property-management.html");
                break;
            case "/user-registration":
                loadContent("frontend/html/user-registration.html")
                loadScript('frontend/assets/js/userRegistration.js')
                break;
            default:
                //loadContent("frontend/html/404.html");
        }
    }

    document.body.addEventListener("click", e => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            navigateTo(link.getAttribute("data-link"));
        }
    });

    window.addEventListener("popstate", router);

    router();
});