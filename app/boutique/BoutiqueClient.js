"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function BoutiqueClient({ products, categories }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [collection, setCollection] = useState("Toutes");
  const [size, setSize] = useState("Toutes");
  const [color, setColor] = useState("Toutes");
  const [maxPrice, setMaxPrice] = useState(100);
  const [bestSellerOnly, setBestSellerOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [sort, setSort] = useState("featured");

  const collections = useMemo(
    () => [
      "Toutes",
      ...Array.from(new Set(products.map((product) => product.collection))),
    ],
    [products],
  );

  const sizes = useMemo(
    () => [
      "Toutes",
      ...Array.from(
        new Set(products.flatMap((product) => product.sizes)),
      ),
    ],
    [products],
  );

  const colors = useMemo(
    () => [
      "Toutes",
      ...Array.from(
        new Set(products.flatMap((product) => product.colors)),
      ).sort(),
    ],
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.short.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        category === "Tous" || product.category === category;

      const matchesCollection =
        collection === "Toutes" || product.collection === collection;

      const matchesSize =
        size === "Toutes" || product.sizes.includes(size);

      const matchesColor =
        color === "Toutes" || product.colors.includes(color);

      const matchesPrice = product.price <= maxPrice;

      const matchesBestSeller =
        !bestSellerOnly || product.bestSeller;

      const matchesNew = !newOnly || product.isNew;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesCollection &&
        matchesSize &&
        matchesColor &&
        matchesPrice &&
        matchesBestSeller &&
        matchesNew
      );
    });

    if (sort === "price-low") {
      return [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      return [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      return [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sort === "new") {
      return [...result].sort(
        (a, b) => Number(b.isNew) - Number(a.isNew),
      );
    }

    return result;
  }, [
    products,
    search,
    category,
    collection,
    size,
    color,
    maxPrice,
    bestSellerOnly,
    newOnly,
    sort,
  ]);

  function resetFilters() {
    setSearch("");
    setCategory("Tous");
    setCollection("Toutes");
    setSize("Toutes");
    setColor("Toutes");
    setMaxPrice(100);
    setBestSellerOnly(false);
    setNewOnly(false);
    setSort("featured");
  }

  return (
    <section className="shop-catalog-section">
      <div className="container">
        <div className="shop-toolbar">
          <label className="shop-search">
            <span className="sr-only">Rechercher un produit</span>
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Rechercher un produit…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <div className="shop-sort">
            <label htmlFor="product-sort">Trier par</label>

            <select
              id="product-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="featured">Notre sélection</option>
              <option value="price-low">Prix croissant</option>
              <option value="price-high">Prix décroissant</option>
              <option value="rating">Mieux notés</option>
              <option value="new">Nouveautés</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          <aside className="shop-filters">
            <div className="shop-filter-heading">
              <div>
                <p>Affiner</p>
                <h2>Filtres</h2>
              </div>

              <button type="button" onClick={resetFilters}>
                Réinitialiser
              </button>
            </div>

            <div className="shop-filter-group">
              <label htmlFor="category-filter">Catégorie</label>

              <select
                id="category-filter"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="shop-filter-group">
              <label htmlFor="collection-filter">Collection</label>

              <select
                id="collection-filter"
                value={collection}
                onChange={(event) => setCollection(event.target.value)}
              >
                {collections.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="shop-filter-group">
              <label htmlFor="size-filter">Taille</label>

              <select
                id="size-filter"
                value={size}
                onChange={(event) => setSize(event.target.value)}
              >
                {sizes.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="shop-filter-group">
              <label htmlFor="color-filter">Couleur</label>

              <select
                id="color-filter"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                {colors.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="shop-filter-group">
              <div className="shop-range-heading">
                <label htmlFor="price-filter">Prix maximum</label>
                <strong>{maxPrice} €</strong>
              </div>

              <input
                id="price-filter"
                type="range"
                min="10"
                max="100"
                step="5"
                value={maxPrice}
                onChange={(event) =>
                  setMaxPrice(Number(event.target.value))
                }
              />
            </div>

            <div className="shop-filter-checks">
              <label>
                <input
                  type="checkbox"
                  checked={bestSellerOnly}
                  onChange={(event) =>
                    setBestSellerOnly(event.target.checked)
                  }
                />
                Best-sellers uniquement
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={newOnly}
                  onChange={(event) => setNewOnly(event.target.checked)}
                />
                Nouveautés uniquement
              </label>
            </div>
          </aside>

          <div className="shop-results">
            <div className="shop-results-heading">
              <p>
                <strong>{filteredProducts.length}</strong>{" "}
                {filteredProducts.length > 1 ? "produits" : "produit"}
              </p>

              <span>
                Sélection pensée pour les corgis et leurs humains
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="shop-products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            ) : (
              <div className="shop-empty-state">
                <span aria-hidden="true">🐾</span>
                <h2>Aucun produit trouvé</h2>
                <p>
                  Modifie tes filtres ou réinitialise la recherche.
                </p>
                <button type="button" onClick={resetFilters}>
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}