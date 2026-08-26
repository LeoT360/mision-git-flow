// Simulación de base de datos en memoria con persistencia en LocalStorage
let products = JSON.parse(localStorage.getItem('novatech_products')) || [
    { id: 1, name: 'Servidor Dell PowerEdge', price: 2500.00, category: 'Hardware', stock: 5 },
    { id: 2, name: 'Switch Cisco 24 Puertos', price: 450.50, category: 'Redes', stock: 12 }
];

const productForm = document.getElementById('product-form');
const productIdInput = document.getElementById('product-id');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const categoryInput = document.getElementById('category');
const stockInput = document.getElementById('stock');
const productTableBody = document.getElementById('product-table-body');
const formTitle = document.getElementById('form-title');
const btnSave = document.getElementById('btn-save');
const btnCancel = document.getElementById('btn-cancel');

// Inicializar la aplicación listando los productos
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Manejar el envío del formulario (Crear o Editar)
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = productIdInput.value;
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const category = categoryInput.value.trim();
    const stock = parseInt(stockInput.value);

    if (id) {
        // Editar producto existente
        products = products.map(p => p.id == id ? { id: parseInt(id), name, price, category, stock } : p);
    } else {
        // Crear nuevo producto
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, price, category, stock });
    }

    saveAndReset();
});

// Listar productos en la tabla
function renderProducts() {
    productTableBody.innerHTML = '';

    if (products.length === 0) {
        productTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center;">No hay productos registrados.</td></tr>`;
        return;
    }

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.category}</td>
            <td>${product.stock}</td>
            <td>
                <button class="btn-edit" onclick="editProduct(${product.id})">Editar</button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">Eliminar</button>
            </td>
        `;
        productTableBody.appendChild(row);
    });
}

// Cargar datos en el formulario para editar
window.editProduct = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    productIdInput.value = product.id;
    nameInput.value = product.name;
    priceInput.value = product.price;
    categoryInput.value = product.category;
    stockInput.value = product.stock;

    formTitle.textContent = 'Editar Producto';
    btnSave.textContent = 'Actualizar Producto';
    btnCancel.style.display = 'inline-block';
};

// Eliminar producto
window.deleteProduct = function(id) {
    if (confirm('¿Está seguro de eliminar este producto del inventario?')) {
        products = products.filter(p => p.id !== id);
        saveAndReset();
    }
};

// Cancelar edición
btnCancel.addEventListener('click', () => {
    resetForm();
});

// Guardar en LocalStorage y refrescar vista
function saveAndReset() {
    localStorage.setItem('novatech_products', JSON.stringify(products));
    renderProducts();
    resetForm();
}

// Resetear formulario a modo creación
function resetForm() {
    productForm.reset();
    productIdInput.value = '';
    formTitle.textContent = 'Registrar Nuevo Producto';
    btnSave.textContent = 'Guardar Producto';
    btnCancel.style.display = 'none';
}