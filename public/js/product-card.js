function createProductCard(product) {
  return `
    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden mb-6 transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3 flex justify-center p-4 bg-gray-50">
          <img src="../assets/images/${product.imageUrl}" alt="${product.name}" 
               class="w-full max-w-[160px] h-auto object-contain aspect-square">
        </div>
        <div class="p-4 md:w-2/3 flex flex-col">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${product.name}</h3>
          <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
          <div class="mb-3">
            <span class="font-semibold text-sm">Variants:</span>
            <span class="text-gray-700 text-sm ml-2">${product.variants.join(', ')}</span>
          </div>
          <div class="mt-auto">
            <span class="text-lg font-bold text-gray-800">Rp ${product.price.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProductCards(products, containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = products.map(product => createProductCard(product)).join('');
  }
}