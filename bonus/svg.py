import os

def generate_seat_svg(seat_number, output_dir="seats"):
    os.makedirs(output_dir, exist_ok=True)
    
    svg_template = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="120" height="160" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
  <!-- Dossier -->
  <rect x="20" y="10" rx="20" ry="20" width="80" height="70" fill="#8B0000" stroke="#400000" stroke-width="4"/>
  
  <!-- Assise -->
  <rect x="25" y="90" width="70" height="25" rx="10" ry="10" fill="#A52A2A" stroke="#400000" stroke-width="3"/>

  <!-- Pieds -->
  <rect x="30" y="120" width="10" height="30" fill="#333" />
  <rect x="80" y="120" width="10" height="30" fill="#333" />

  <!-- Numéro -->
  <text x="60" y="50" font-size="24" font-family="Arial" font-weight="bold" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">{seat_number}</text>
</svg>'''

    with open(os.path.join(output_dir, f"seat_{seat_number}.svg"), "w", encoding="utf-8") as f:
        f.write(svg_template)


# Génère 10 sièges numérotés
for i in range(1, 11):
    generate_seat_svg(i)
