document.addEventListener("DOMContentLoaded", function () {
  // ============== CART AND WISHLIST DATA ==============
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // ============== ALL PRODUCTS DATA FOR SEARCH ==============
  const allProducts = [
    // Sale page products
    {
      id: "1",
      name: "Signature Blazer",
      price: 5399,
      oldPrice: 8999,
      image: "assets/img/s1.jpg",
      category: "blazer",
      main: "men",
    },
    {
      id: "2",
      name: "Utility Overshirt",
      price: 3249,
      oldPrice: 4999,
      image: "assets/img/s2 (2).jpg",
      category: "shirt",
      main: "men",
    },
    {
      id: "3",
      name: "Tailored Trousers",
      price: 2699,
      oldPrice: 4499,
      image: "assets/img/s3 (2).jpg",
      category: "trousers",
      main: "men",
    },
    {
      id: "4",
      name: "Cashmere Sweater",
      price: 4899,
      oldPrice: 6999,
      image: "assets/img/s4.jpg",
      category: "sweater",
      main: "men",
    },
    {
      id: "5",
      name: "Black Graphite Shirt",
      price: 2399,
      oldPrice: 3999,
      image: "assets/img/s5.jpg",
      category: "shirt",
      main: "men",
    },
    {
      id: "6",
      name: "Tailored Blazer Set",
      price: 6499,
      oldPrice: 9999,
      image: "assets/img/s6.jpg",
      category: "blazer",
      main: "women",
    },
    {
      id: "7",
      name: "Deep Olive Dress",
      price: 4224,
      oldPrice: 6499,
      image: "assets/img/s7.jpg",
      category: "dress",
      main: "women",
    },
    {
      id: "8",
      name: "Warm Sand Co-ord",
      price: 3899,
      oldPrice: 5999,
      image: "assets/img/s8.jpg",
      category: "dress",
      main: "women",
    },
    {
      id: "9",
      name: "Black Graphite Dress",
      price: 5099,
      oldPrice: 8499,
      image: "assets/img/s9.jpg",
      category: "dress",
      main: "women",
    },
    {
      id: "10",
      name: "Gray Wide-Leg Pants",
      price: 2999,
      oldPrice: 4999,
      image: "assets/img/s10.jpg",
      category: "trousers",
      main: "women",
    },
    {
      id: "11",
      name: "Dial Signature Watch",
      price: 8499,
      oldPrice: 12999,
      image: "assets/img/s11.jpg",
      category: "watch",
      main: "accessories",
    },
    {
      id: "12",
      name: "Black Leather Belt",
      price: 1249,
      oldPrice: 2499,
      image: "assets/img/s12.jpg",
      category: "belt",
      main: "accessories",
    },
    {
      id: "13",
      name: "Noir Sunglasses",
      price: 3249,
      oldPrice: 4999,
      image: "assets/img/s13.jpg",
      category: "sunglasses",
      main: "accessories",
    },
    {
      id: "14",
      name: "Bronze Handbag",
      price: 5399,
      oldPrice: 8999,
      image: "assets/img/s14.jpg",
      category: "bag",
      main: "accessories",
    },
    {
      id: "15",
      name: "Ivory Sneakers",
      price: 4549,
      oldPrice: 6999,
      image: "assets/img/s15.jpg",
      category: "shoes",
      main: "accessories",
    },
    {
      id: "16",
      name: "Deep Olive Scarf",
      price: 1949,
      oldPrice: 2999,
      image: "assets/img/s16.jpg",
      category: "scarf",
      main: "accessories",
    },

    // Women page products
    {
      id: "w1",
      name: "Structured Blazer",
      price: 12990,
      oldPrice: 18990,
      image: "assets/img/olive_blazer.jpg",
      category: "blazer",
      main: "women",
    },
    {
      id: "w2",
      name: "Ivory Trousers",
      price: 8490,
      oldPrice: 11990,
      image: "assets/img/ivory_trousers.jpg",
      category: "trousers",
      main: "women",
    },
    {
      id: "w3",
      name: "Sand Tailored Coat",
      price: 18990,
      oldPrice: 24990,
      image: "assets/img/sand_coat.jpg",
      category: "outerwear",
      main: "women",
    },
    {
      id: "w4",
      name: "Graphite Midi Dress",
      price: 11490,
      oldPrice: 15990,
      image: "assets/img/midi_dress.jpg",
      category: "dress",
      main: "women",
    },
    {
      id: "w5",
      name: "Olive Silk Blouse",
      price: 7990,
      oldPrice: 10990,
      image: "assets/img/silk_blouse.jpg",
      category: "outerwear",
      main: "women",
    },

    // Men page products
    {
      id: "m1",
      name: "Structured Blazer",
      price: 14990,
      oldPrice: 19990,
      image: "assets/img/mp1.jpg",
      category: "blazer",
      main: "men",
    },
    {
      id: "m2",
      name: "Tailored Blazer",
      price: 13490,
      oldPrice: 17990,
      image: "assets/img/mp2.jpg",
      category: "blazer",
      main: "men",
    },
    {
      id: "m3",
      name: "White Poplin Shirt",
      price: 8990,
      oldPrice: 11990,
      image: "assets/img/mp3.jpg",
      category: "shirt",
      main: "men",
    },
    {
      id: "m4",
      name: "Black Minimal Shirt",
      price: 9990,
      oldPrice: 12990,
      image: "assets/img/mp4.jpg",
      category: "shirt",
      main: "men",
    },
    {
      id: "m5",
      name: "Tailored Trouser",
      price: 10990,
      oldPrice: 14990,
      image: "assets/img/mp5.jpg",
      category: "trousers",
      main: "men",
    },

    // Accessories page products
    {
      id: "a1",
      name: "Black Leather Belt",
      price: 4990,
      oldPrice: 6990,
      image: "assets/img/a1.jpg",
      category: "belt",
      main: "accessories",
    },
    {
      id: "a2",
      name: "Brown Leather Belt",
      price: 5490,
      oldPrice: 7490,
      image: "assets/img/a2.jpg",
      category: "belt",
      main: "accessories",
    },
    {
      id: "a3",
      name: "Leather Tote Bag",
      price: 18990,
      oldPrice: 24990,
      image: "assets/img/a3.jpg",
      category: "bag",
      main: "accessories",
    },
    {
      id: "a4",
      name: "Crossbody Bag",
      price: 12990,
      oldPrice: 16990,
      image: "assets/img/a4.jpg",
      category: "bag",
      main: "accessories",
    },
    {
      id: "a5",
      name: "Leather Loafers",
      price: 14990,
      oldPrice: 19990,
      image: "assets/img/a5.jpg",
      category: "shoe",
      main: "accessories",
    },

    // New In page products
    {
      id: "n1",
      name: "Linen Shirt",
      price: 8400,
      oldPrice: 10990,
      image: "assets/img/n1.jpg",
      category: "men",
      main: "men",
    },
    {
      id: "n2",
      name: "Structured Blazer",
      price: 18900,
      oldPrice: 24990,
      image: "assets/img/n2.jpg",
      category: "men",
      main: "men",
    },
    {
      id: "n3",
      name: "Relaxed Trousers",
      price: 11500,
      oldPrice: 14990,
      image: "assets/img/n3.jpg",
      category: "men",
      main: "men",
    },
    {
      id: "n5",
      name: "Ivory Silk Blouse",
      price: 9200,
      oldPrice: 11990,
      image: "assets/img/n5.jpg",
      category: "women",
      main: "women",
    },
    {
      id: "n6",
      name: "Pleated Midi Dress",
      price: 16400,
      oldPrice: 21990,
      image: "assets/img/n6.jpg",
      category: "women",
      main: "women",
    },
    {
      id: "n9",
      name: "Leather Tote",
      price: 14700,
      oldPrice: 19990,
      image: "assets/img/n9.jpg",
      category: "accessories",
      main: "accessories",
    },
    {
      id: "n13",
      name: "Leather Loafers",
      price: 12600,
      oldPrice: 16990,
      image: "assets/img/n13.jpg",
      category: "footwear",
      main: "footwear",
    },

    // Home page featured products
    {
      id: "home1",
      name: "Tailored Beige Blazer",
      price: 8900,
      oldPrice: 11900,
      image: "assets/img/p1.jpg",
      category: "blazer",
      main: "women",
    },
    {
      id: "home2",
      name: "Black Evening Dress",
      price: 12500,
      oldPrice: 15900,
      image: "assets/img/p2.jpg",
      category: "dress",
      main: "women",
    },
    {
      id: "home3",
      name: "Deep Olive Set",
      price: 7200,
      oldPrice: 9900,
      image: "assets/img/p3.jpg",
      category: "set",
      main: "women",
    },
    {
      id: "home4",
      name: "Minimal Handbag",
      price: 5400,
      oldPrice: 7900,
      image: "assets/img/p4.jpg",
      category: "bag",
      main: "accessories",
    },
    {
      id: "home5",
      name: "Charcoal Minimalist Suit",
      price: 18400,
      oldPrice: 22900,
      image: "assets/img/p5.jpg",
      category: "suit",
      main: "men",
    },
    {
      id: "home6",
      name: "Stone Gray Knit & Relaxed Pants",
      price: 9300,
      oldPrice: 12900,
      image: "assets/img/p6.jpg",
      category: "knitwear",
      main: "men",
    },
    {
      id: "home7",
      name: "Bronze Leather Belt",
      price: 4500,
      oldPrice: 6500,
      image: "assets/img/p7.jpg",
      category: "belt",
      main: "accessories",
    },
    {
      id: "home8",
      name: "Deep Olive Long Structured Coat",
      price: 22000,
      oldPrice: 28900,
      image: "assets/img/p8.jpg",
      category: "outerwear",
      main: "women",
    },
  ];
  // Store all products in localStorage for other pages to use
  localStorage.setItem("allProducts", JSON.stringify(allProducts));

  // ============== UPDATE COUNTS FUNCTION ==============
  function updateWishlistCount() {
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const totalWishlist = wishlist.length;
    document.querySelectorAll(".wishlist-badge").forEach((b) => {
      b.textContent = totalWishlist;
      b.style.display = "inline-block";
    });
  }

  function updateCartCount() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelectorAll(".cart-badge").forEach((b) => {
      b.textContent = totalQty;
      b.style.display = "inline-block";
    });
  }

  // Initial update
  updateWishlistCount();
  updateCartCount();

  // ============== CHECK FOR UPDATES (SAME AS WOMEN'S PAGE) ==============
  // Instead of setInterval, we'll use more efficient methods
  
  // Listen for storage events (when other tabs change localStorage)
  window.addEventListener("storage", function (e) {
    if (e.key === "wishlist") {
      wishlist = JSON.parse(e.newValue) || [];
      updateWishlistCount();
      updateWishlistIcons(); // Update heart icons on the page
    }
    if (e.key === "cart") {
      cart = JSON.parse(e.newValue) || [];
      updateCartCount();
    }
  });

  // Custom events for same-tab updates
  window.addEventListener("wishlistUpdated", function () {
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    updateWishlistCount();
    updateWishlistIcons();
  });

  window.addEventListener("cartUpdated", function () {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
  });

  // Page visibility API - update when returning to the page
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      cart = JSON.parse(localStorage.getItem("cart")) || [];
      updateWishlistCount();
      updateCartCount();
      updateWishlistIcons();
    }
  });

  // ============== UPDATE WISHLIST ICONS ==============
  function updateWishlistIcons() {
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    document.querySelectorAll(".product-card").forEach(card => {
      const productId = card.dataset.productId;
      const heartIcon = card.querySelector(".wishlist-btn i");
      if (heartIcon) {
        const exists = wishlist.some(item => item.id === productId);
        if (exists) {
          heartIcon.classList.remove("bi-heart");
          heartIcon.classList.add("bi-heart-fill");
        } else {
          heartIcon.classList.remove("bi-heart-fill");
          heartIcon.classList.add("bi-heart");
        }
      }
    });
  }

  // ============== TOAST NOTIFICATION ==============
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = `
      <i class="bi bi-check-circle-fill"></i>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ============== ANIMATED SEARCH BAR ==============
  const searchIcon = document.getElementById("searchIcon");
  const searchBarWrapper = document.getElementById("searchBarWrapper");
  const searchInputNav = document.getElementById("searchInputNav");
  const searchInputNavMobile = document.getElementById("searchInputNavMobile");
  const searchResultsGrid = document.getElementById("searchResultsGrid");
  const searchResultsContainer = document.getElementById("searchResultsContainer");
  const searchResultsCount = document.getElementById("searchResultsCount");
  const closeSearchResults = document.getElementById("closeSearchResults");

  // Clear everything on refresh
  if (searchInputNav) searchInputNav.value = "";
  if (searchInputNavMobile) searchInputNavMobile.value = "";
  if (searchResultsGrid) searchResultsGrid.classList.remove("show");

  let searchTimeout;

  if (searchIcon) {
    searchIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      searchBarWrapper.classList.toggle("active");
      if (searchBarWrapper.classList.contains("active")) {
        searchInputNav.focus();
      }
    });
  }

  function triggerSearch(query) {
    const results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        (product.category?.toLowerCase() || "").includes(query.toLowerCase()),
    );

    if (searchResultsCount) {
      searchResultsCount.textContent = `${results.length} product${results.length !== 1 ? "s" : ""} found`;
    }

    if (results.length === 0) {
      searchResultsContainer.innerHTML =
        '<div class="col-12 text-center py-5"><p style="color: var(--stone-gray);">No products found.</p></div>';
    } else {
      searchResultsContainer.innerHTML = results
        .map((product) => {
          const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100,
          );

          return `
            <div class="col-md-6 col-lg-3">
              <div class="search-product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                <div class="search-product-info">
                  <h6>${product.name}</h6>
                  <p>
                    ₹${product.price.toLocaleString()}
                    <span class="old-price">₹${product.oldPrice.toLocaleString()}</span>
                    <span class="discount-badge">${discount}% OFF</span>
                  </p>
                </div>
              </div>
            </div>
          `;
        })
        .join("");

      document.querySelectorAll(".search-product-card").forEach((card) => {
        card.addEventListener("click", function () {
          const productId = this.dataset.id;
          const selectedProduct = allProducts.find((p) => p.id === productId);
          localStorage.setItem("currentProduct", JSON.stringify(selectedProduct));
          window.location.href = `product-detail.html?id=${productId}`;
        });
      });
    }

    if (searchResultsGrid) {
      searchResultsGrid.classList.add("show");
    }
  }

  // Close search bar when clicking outside
  document.addEventListener("click", function (e) {
    if (
      searchBarWrapper &&
      searchIcon &&
      !searchBarWrapper.contains(e.target) &&
      !searchIcon.contains(e.target)
    ) {
      searchBarWrapper.classList.remove("active");
    }
  });

  // Close search results
  if (closeSearchResults) {
    closeSearchResults.addEventListener("click", () => {
      searchResultsGrid.classList.remove("show");
      searchBarWrapper?.classList.remove("active");
      if (searchInputNav) searchInputNav.value = "";
      if (searchInputNavMobile) searchInputNavMobile.value = "";
    });
  }

  // Live search
  if (searchInputNav) {
    searchInputNav.addEventListener("input", function () {
      clearTimeout(searchTimeout);
      const query = this.value.trim();
      if (query.length < 2) {
        searchResultsGrid.classList.remove("show");
        return;
      }
      searchTimeout = setTimeout(() => triggerSearch(query), 300);
    });

    searchInputNav.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = this.value.trim();
        if (query.length >= 2) triggerSearch(query);
      }
    });
  }

  // Mobile search
  if (searchInputNavMobile) {
    searchInputNavMobile.addEventListener("input", function () {
      clearTimeout(searchTimeout);
      const query = this.value.trim();
      if (query.length < 2) {
        searchResultsGrid.classList.remove("show");
        return;
      }
      searchTimeout = setTimeout(() => triggerSearch(query), 300);
    });

    searchInputNavMobile.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = this.value.trim();
        if (query.length >= 2) triggerSearch(query);
      }
    });
  }

  // ============== PRODUCT CARD CLICK HANDLER ==============
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      // Skip if clicking on wishlist or cart button
      if (e.target.closest(".wishlist-btn") || e.target.closest(".add-cart-btn")) {
        return;
      }

      // Get product data from data attributes
      const productId = this.dataset.productId;
      const productName = this.dataset.productName;
      const productPrice = parseInt(this.dataset.productPrice);
      const productImage = this.dataset.productImage;

      // Find the exact product in allProducts array
      let product = allProducts.find((p) => p.id === productId);

      if (!product) {
        product = allProducts.find((p) => p.name === productName);
      }

      if (!product) {
        const productMap = {
          "Tailored Beige Blazer": { id: "home1", main: "women", category: "blazer" },
          "Black Evening Dress": { id: "home2", main: "women", category: "dress" },
          "Deep Olive Set": { id: "home3", main: "women", category: "set" },
          "Minimal Handbag": { id: "home4", main: "accessories", category: "bag" },
          "Charcoal Minimalist Suit": { id: "home5", main: "men", category: "suit" },
          "Stone Gray Knit & Relaxed Pants": { id: "home6", main: "men", category: "knitwear" },
          "Bronze Leather Belt": { id: "home7", main: "accessories", category: "belt" },
          "Deep Olive Long Structured Coat": { id: "home8", main: "women", category: "outerwear" },
        };

        const mapped = productMap[productName] || { main: "women", category: "clothing" };

        product = {
          id: mapped.id || productId,
          name: productName,
          price: productPrice,
          oldPrice: Math.round(productPrice * 1.3),
          image: productImage,
          main: mapped.main,
          category: mapped.category,
          size: "S,M,L,XL",
        };
      }

      localStorage.setItem("currentProduct", JSON.stringify(product));
      window.location.href = `product-detail.html?id=${product.id}`;
    });
  });

  // ============== WISHLIST BUTTON HANDLER ==============
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const productCard = this.closest(".product-card");
      if (!productCard) return;

      const productId = productCard.dataset.productId;
      const productName = productCard.dataset.productName;
      const productPrice = parseInt(productCard.dataset.productPrice);
      const productImage = productCard.dataset.productImage;

      // Find or create product
      let product = allProducts.find((p) => p.id === productId);

      if (!product) {
        product = {
          id: productId,
          name: productName,
          price: productPrice,
          oldPrice: Math.round(productPrice * 1.3),
          image: productImage,
          main: "women",
          category: "clothing",
        };
      }

      // Toggle wishlist
      wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const existingIndex = wishlist.findIndex((item) => item.id === product.id);

      // Update heart icon
      const heartIcon = this.querySelector("i");

      if (existingIndex !== -1) {
        wishlist.splice(existingIndex, 1);
        heartIcon.classList.remove("bi-heart-fill");
        heartIcon.classList.add("bi-heart");
        showToast(`${product.name} removed from wishlist`);
      } else {
        wishlist.push(product);
        heartIcon.classList.remove("bi-heart");
        heartIcon.classList.add("bi-heart-fill");
        showToast(`${product.name} added to wishlist`);
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      updateWishlistCount();
      
      // Dispatch custom event for other components/tabs
      window.dispatchEvent(new Event('wishlistUpdated'));
    });
  });

  // ============== ADD TO CART BUTTON HANDLER ==============
  document.querySelectorAll(".add-cart-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const productCard = this.closest(".product-card");
      if (!productCard) return;

      const productId = productCard.dataset.productId;
      const productName = productCard.dataset.productName;
      const productPrice = parseInt(productCard.dataset.productPrice);
      const productImage = productCard.dataset.productImage;

      // Find or create product
      let product = allProducts.find((p) => p.id === productId);

      if (!product) {
        product = {
          id: productId,
          name: productName,
          price: productPrice,
          oldPrice: Math.round(productPrice * 1.3),
          image: productImage,
          quantity: 1,
        };
      } else {
        product = { ...product, quantity: 1 };
      }

      // Add to cart
      cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      showToast(`${product.name} added to cart!`);
      
      // Dispatch custom event for other components/tabs
      window.dispatchEvent(new Event('cartUpdated'));
    });
  });

  // ============== NEWSLETTER FORM ==============
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      showToast(`Thank you for subscribing with ${email}!`);
      e.target.reset();
    });
  }

  // ============== INITIAL WISHLIST ICON STATE ==============
  updateWishlistIcons();
});