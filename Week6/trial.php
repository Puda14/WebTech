<!DOCTYPE html>
<html>
<head>
    <title>Thông tin người</title>
</head>
<body>
    <h2>Nhập thông tin người</h2>
    <form method="post" action="">
        <label for="name1">Họ và tên người thứ nhất:</label><br>
        <input type="text" id="name1" name="name1"><br>
        <label for="dob1">Ngày sinh của người thứ nhất:</label><br>
        <input type="date" id="dob1" name="dob1"><br><br>

        <label for="name2">Họ và tên người thứ hai:</label><br>
        <input type="text" id="name2" name="name2"><br>
        <label for="dob2">Ngày sinh của người thứ hai:</label><br>
        <input type="date" id="dob2" name="dob2"><br><br>

        <input type="submit" value="Tính">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Lấy thông tin nhập vào từ form
        $name1 = $_POST['name1'];
        $dob1 = new DateTime($_POST['dob1']);
        $name2 = $_POST['name2'];
        $dob2 = new DateTime($_POST['dob2']);

        // Tính tuổi của từng người
        $today = new DateTime();
        $age1 = $dob1->diff($today)->y;
        $age2 = $dob2->diff($today)->y;

        // Tính số ngày chênh lệch giữa hai ngày
        $diff = $dob1->diff($dob2)->days;

        // Hiển thị kết quả
        echo "<h2>Kết quả</h2>";
        echo "<p>Tuổi của $name1 là: $age1 tuổi</p>";
        echo "<p>Tuổi của $name2 là: $age2 tuổi</p>";
        echo "<p>Số ngày chênh lệch giữa hai người là: $diff ngày</p>";
    }
    ?>
</body>
</html>
