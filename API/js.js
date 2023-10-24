// Tạo một hàm để lấy dữ liệu từ API và hiển thị nó
function fetchDataFromAPI() {
    // Địa chỉ URL của mock API
    const apiUrl = 'https://6520d271906e276284c4b041.mockapi.io/product';

    // Sử dụng Fetch API để gửi yêu cầu GET đến API
    fetch(apiUrl)
        .then((response) => {
            // Kiểm tra xem yêu cầu có thành công hay không
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Chuyển đổi dữ liệu JSON
            return response.json();
        })
        .then((data) => {
            // Xử lý dữ liệu đã nhận được
            displayData(data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Tạo một hàm để hiển thị dữ liệu lên trang web
function displayData(data) {
    // Lấy phần tử HTML mà bạn muốn hiển thị dữ liệu vào
    const container = document.getElementById('dataContainer');

    // Tạo một chuỗi HTML để hiển thị dữ liệu
    let html = '<ul>';
    data.forEach((product) => {
        html += `<li>
                    <img src="${product.avatar}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>ID: ${product.id}</p>
                </li>`;
    });
    html += '</ul>';

    // Gán chuỗi HTML vào phần tử HTML
    container.innerHTML = html;
}

// Gán sự kiện click cho nút "Tải Dữ liệu"
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchDataFromAPI);