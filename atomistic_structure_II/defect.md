# Defect

In the previous chapter, we discussed the ideal atomic arrangements in crystalline materials. However, in reality, perfect crystals are rare. Most materials contain various types of structural imperfections, such as defects, interfaces, and grain boundaries. These imperfections can significantly influence material properties, including mechanical strength, electrical conductivity, and thermal stability.

## Point Defects
Point defects are the simplest type of structural imperfections in crystalline materials. They involve the presence of atoms at lattice sites that are different from the ideal atomic arrangement. Point defects can be classified into three main categories: vacancies, interstitials, and substitutional defects.

### Charged Defect vs Neutral Defect
Charged defects are point defects that introduce an electrical charge into the crystal lattice. These defects can affect the material's electronic properties, such as conductivity and band structure. Neutral defects, on the other hand, do not introduce an electrical charge and have a minimal impact on the material's electronic properties.

### Finite Size Corrections
Finite size corrections are adjustments made to the calculated properties of defects in materials to account for the finite size of the simulation cell. The standard method is [Freysoldt correction](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.016402), which corrects the defect formation energy by considering the interaction between the defect and its periodic images.

### Vacancies
A vacancy occurs when an atom is missing from its lattice site. This defect creates a local distortion in the crystal structure, leading to changes in material properties. For example, vacancies can increase the diffusion rate of atoms in a material, affecting its mechanical and thermal properties.
- Schottky defect: A type of point defect in which oppositely charged ions are missing from their ideal lattice sites.

### Interstitials
An interstitial defect arises when an atom occupies an interstitial site within the crystal lattice. This defect can introduce strain and alter the electronic properties of the material. Interstitial atoms can also act as impurities, affecting the material's mechanical and electrical behavior.
- Frendel defect: An interstitial defect in which an atom occupies an interstitial site in the crystal lattice.

### Antisites
Antisites are substitutional defects in which an atom occupies a lattice site that is different from its ideal position. This defect can disrupt the crystal structure and lead to changes in material properties. Antisites can affect the material's electronic, optical, and magnetic properties, making them essential for understanding the behavior of complex materials.

## Disordered Structures
Disordered structures are materials with random atomic arrangements, unlike the ordered structures found in crystals. Disordered materials can exhibit unique properties, such as high flexibility, high surface area, and enhanced reactivity. Understanding the atomic arrangements in disordered materials is crucial for designing new materials with tailored properties.

### Thermal Disorder
Thermal disorder refers to the random motion of atoms in a material due to thermal energy. This disorder can lead to changes in material properties, such as thermal expansion, heat capacity, and thermal conductivity. Understanding thermal disorder is essential for predicting the behavior of materials at different temperatures.

### Chemical Disorder
Chemical disorder arises from the random distribution of different types of atoms in a material. This disorder can affect the material's electronic, magnetic, and optical properties. Chemical disorder is common in complex materials, such as alloys and compounds, and plays a crucial role in determining their behavior.

An example is the high-entropy alloy (HEA), which contains multiple elements in random atomic arrangements. High-entropy alloys exhibit exceptional mechanical, thermal, and magnetic properties, making them promising materials for various applications.

## Supercell
Crystal structures have periodicity, which means that the arrangement of atoms repeats itself in space. However, defects can disrupt this periodicity. To model defective structures, we use a supercell—a larger unit cell that contains the defect. By introducing a defect into the supercell, we can study its impact on material properties.