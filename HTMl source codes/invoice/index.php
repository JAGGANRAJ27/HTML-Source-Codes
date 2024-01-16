<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoices</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
</head>
<body>

<?php
include('./includes/connect.php');

if (isset($_POST['project_id'])) {
    $selected_project_id = $_POST['project_id'];

    $invoice_query = "SELECT p.*, c.name AS client_name, c.email AS client_email, c.phone AS client_phone, c.address AS client_address
                      FROM `projects` p
                      JOIN `clients` c ON p.client = c.client_id
                      WHERE p.project_id = '$selected_project_id'";
    $invoice_result = mysqli_query($con, $invoice_query);
    $invoice_row = mysqli_fetch_assoc($invoice_result);
    $remainingAmount = $invoice_row['amount'] - $invoice_row['paid'];

    $status = $invoice_row['status'];
    $statusClass = '';

    switch ($status) {
        case 'research':
            $statusClass = 'text-primary fw-bold';
            break;
        case 'wireframe':
            $statusClass = 'text-primary fw-bold';
            break;
        case 'UI/UX':
            $statusClass = 'text-primary fw-bold';
            break;
        case 'Design(implement)':
            $statusClass = 'text-info fw-bold';
            break;
        case 'demo':
            $statusClass = 'text-secondary fw-bold';
            break;
        case 'success':
            $statusClass = 'text-success fw-bold';
            break;
        case 'failed':
            $statusClass = 'text-danger fw-bold';
            break;
        case 'payment_pending':
            $statusClass = 'text-warning fw-bold';
            break;
        default:
            $statusClass = '';
    }
?>

<div class="main">
    <div class="row">
        <div class="col-md-6 p-5">
            <h4>Invoice </h4>
            <h5>Invoice ID : <?php echo $invoice_row['project_id']; ?></h5>
        </div>
        <div class="col-md-6 p-5 d-flex align-items-center"> 
            <img src="https://njwebdesigning.in/wp-content/uploads/2023/11/Icon-black.svg" alt="Logo"
                style="max-width: 100px; height: auto;">
            <div class="comapany-details px-4">
                <h3>Business Details</h3>
                <p><span class="fw-bold">Name : </span>Jagganraj <br>
                    <span class="fw-bold">Business Name : </span> NJWEBDESIGNING <br>
                    <span class="fw-bold">Email : </span> njwebdesigning@gmail.com<br>
                    <span class="fw-bold">Phone : </span> +91 9952259514<br>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 p-5">
                    <h2>Invoice Details</h2>
                    <p class="card-text">Project Name: <?php echo $invoice_row['project_name']; ?></p>
                    <p class="card-text">Amount: ₹<?php echo number_format($invoice_row['amount']); ?></p>
                    <p class="card-text">Paid Amount: ₹<?php echo number_format($invoice_row['paid']); ?></p>
                    <p class="card-text">Remaining Amount: ₹<?php echo number_format($remainingAmount); ?></p>
                    <p class="card-text">Date: <?php echo date('Y-m-d'); ?></p>
                    <p class="card-text">Status: <span class=" fw-bold text-uppercase <?php echo $statusClass; ?>"><?php echo $status; ?></span></p>
                </div>
                <div class="col-md-6 p-5">
                    <h2>Client Details</h2>
                    <p class="card-text"><span class="fw-bold">Client Name :</span> <?php echo $invoice_row['client_name']; ?></p>
                    <p class="card-text"><span class="fw-bold">Client Email : </span><?php echo $invoice_row['client_email']; ?></p>
                    <p class="card-text"><span class="fw-bold">Client Phone : </span><?php echo $invoice_row['client_phone']; ?></p>
                </div>
            </div>
        </div>
    </div>
</div>

<button id="downloadPdfBtn">Download PDF</button>

<script>
    document.getElementById('downloadPdfBtn').addEventListener('click', function () {
        var element = document.querySelector('.main');
        
        html2pdf(element, {
            scale: 2,
            letterRendering: true
        }).then(function(pdf) {
            pdf.output('dataurlnewwindow');
        });
    });
</script>

<?php
}
?>

</body>
</html>
