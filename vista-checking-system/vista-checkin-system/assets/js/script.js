// VISTA Check-in System JavaScript

$(document).ready(function() {
    // Initialize DataTable with custom settings
    $('#checkinTable').DataTable({
        "pageLength": 10,
        "lengthChange": false,
        "info": true,
        "searching": true,
        "ordering": true,
        "paging": true,
        "responsive": true,
        "dom": 'rt<"d-flex justify-content-between align-items-center mt-3"ip>',
        "columnDefs": [
            { "orderable": false, "targets": 5 }
        ],
        "language": {
            "info": "Showing _START_ to _END_ of _TOTAL_ entries",
            "infoEmpty": "Showing 0 to 0 of 0 entries",
            "paginate": {
                "last": "Last",
                "next": "NEXT>>",
                "previous": "<<PREV"
            }
        }
    });
    
    // Connect existing search box to DataTables
    $('#searchInput').on('keyup', function() {
        $('#checkinTable').DataTable().search(this.value).draw();
    });

    // Initialize Flatpickr date picker for flight date time
    const flightDateTimePicker = flatpickr("#flightDateTime", {
        enableTime: true,
        dateFormat: "m/d/Y H:i",
        time_24hr: false,
        minDate: "today",
        defaultHour: 12,
        defaultMinute: 0,
        allowInput: true,
        clickOpens: true,
        placeholder: "Select date and time",
        altInput: false,
        altFormat: "F j, Y at h:i K",
        onChange: function(selectedDates, dateStr, instance) {
            // Update the input value with formatted date
            instance.input.value = dateStr;
        }
    });

    // Make calendar icon clickable to open date picker
    $('.calendar-icon-container').on('click', function() {
        flightDateTimePicker.open();
    });

    // Fallback for browsers that don't support datetime-local
    const flightDateTimeInput = document.getElementById('flightDateTime');
    if (!flightDateTimeInput.type || flightDateTimeInput.type !== 'datetime-local') {
        // For older browsers, the Flatpickr will handle the input
        console.log('Using Flatpickr fallback for date picker');
    }
});

// Form submission handler
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkinForm").addEventListener("submit", function (e) {
        e.preventDefault();
    // perform validation
    clearAllFieldErrors();
    const data = {
      passengerName: document.getElementById('passengerName') ? document.getElementById('passengerName').value.trim() : '',
      membershipNo: document.getElementById('membershipNo') ? document.getElementById('membershipNo').value.trim() : '',
      flightNo: document.getElementById('flightNo') ? document.getElementById('flightNo').value.trim() : '',
      flightDateTime: document.getElementById('flightDateTime') ? document.getElementById('flightDateTime').value.trim() : ''
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      // show first error summary notification
      const firstKey = Object.keys(errors)[0];
      showFieldError(firstKey, errors[firstKey]);
      showNotification(errors[firstKey], 'error');
      return;
    }

    // if valid, proceed with adding row or other processing
    // (keep existing behavior minimal — you can extend addTableRow to accept this data)
    showNotification('Check-in added', 'success');
    });
});

function validateForm(data) {
  const errors = {};
  if (!data.passengerName) errors.passengerName = 'Passenger name is required';
  if (!data.membershipNo) errors.membershipNo = 'Membership number is required';
  if (!data.flightNo) errors.flightNo = 'Flight number is required';
  // simple flight number pattern: letters+digits (e.g., UL273)
  const flightPattern = /^[A-Za-z]{1,3}\s?\d{1,4}$/;
  if (data.flightNo && !flightPattern.test(data.flightNo)) errors.flightNo = 'Flight number format invalid (e.g., UL273)';
  if (!data.flightDateTime) errors.flightDateTime = 'Flight date and time is required';
  return errors;
}

function showFieldError(fieldId, message) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  el.classList.add('input-error');
  // find or create a small error text element after the field
  let err = el.parentNode.querySelector('.error-text');
  if (!err) {
    err = document.createElement('div');
    err.className = 'error-text visible';
    el.parentNode.appendChild(err);
  }
  err.textContent = message;
  err.classList.add('visible');
}

function clearFieldError(fieldId) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  el.classList.remove('input-error');
  const err = el.parentNode.querySelector('.error-text');
  if (err) err.classList.remove('visible');
}

function clearAllFieldErrors() {
  ['passengerName','membershipNo','flightNo','flightDateTime'].forEach(id => clearFieldError(id));
}

// Modal functionality for more info
function openModal(
  membershipNumber,
  passengerName,
  flightRoute,
  flightNumber,
  flightDateTime,
  airline,
  entranceReason,
  lounge,
  guests,
  remarks
) {
  // Update modal content
  document.getElementById("modalPassengerName").textContent = passengerName;
  document.getElementById("modalFlightRoute").textContent = flightRoute;
  document.getElementById("modalMembershipNumber").textContent = membershipNumber;
  document.getElementById("modalService").textContent = lounge;
  document.getElementById("modalAirline").textContent = airline;
  document.getElementById("modalFlightNumber").textContent = flightNumber;
  document.getElementById("modalFlightDateTime").textContent = flightDateTime;
  document.getElementById("modalGuests").textContent = guests;
  document.getElementById("modalEntranceReason").textContent = entranceReason;
  document.getElementById("modalRemarks").textContent = remarks;

  // Show modal
  document.getElementById("moreInfoModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("moreInfoModal").style.display = "none";
}

// Close modal when clicking outside
document.addEventListener("click", function (event) {
  const modal = document.getElementById("moreInfoModal");
  if (event.target === modal) {
    closeModal();
  }
});

// Delegated handler for action buttons (for dynamically added rows)
document.addEventListener('click', function (e) {
  const btn = e.target.closest && e.target.closest('.action-btn');
  if (!btn) return;
  // if button has data-payload, decode and call openModal
  const payload = btn.getAttribute('data-payload');
  if (payload) {
    try {
      const obj = JSON.parse(decodeURIComponent(payload));
      openModal(obj.membershipNo || '', obj.passengerName || '', obj.flightRoute || '', obj.flightNo || '', obj.flightDateTime || '', obj.airline || '', obj.entranceReason || '', obj.lounge || '', obj.guests || '', obj.remark || '');
    } catch (err) {
      console.error('Invalid payload', err);
    }
    return;
  }
  // otherwise rely on inline onclick already present (do nothing)
});

// Logout Modal Functions
function openLogoutModal() {
  document.getElementById("logoutModal").style.display = "flex";
}

function closeLogoutModal() {
  document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout() {
  // Add your logout logic here
  console.log("User logged out");
  // For example, redirect to login page:
  // window.location.href = '/login';

  // For now, just close the modal
  closeLogoutModal();
  alert("Logout functionality would be implemented here");
}

// Close logout modal when clicking outside of it
document.addEventListener("click", function (event) {
  const logoutModal = document.getElementById("logoutModal");
  if (event.target === logoutModal) {
    closeLogoutModal();
  }
});

// Close modals with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const logoutModal = document.getElementById("logoutModal");
    if (logoutModal.style.display === "flex") {
      closeLogoutModal();
    }
    const moreInfoModal = document.getElementById("moreInfoModal");
    if (moreInfoModal.style.display === "flex") {
      closeModal();
    }
  }
});