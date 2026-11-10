// Base de datos exhaustiva de conversiones UnitPrecise
const conversions = {
    // --- BÁSICAS Y GEOMETRÍA ---
    longitud: {
        title: "Longitud",
        desc: "Distancias métricas, imperiales y de navegación.",
        icon: "📏",
        units: {
            metros: { name: 'Metros (m)', toBase: v => v, fromBase: v => v },
            kilometros: { name: 'Kilómetros (km)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            centimetros: { name: 'Centímetros (cm)', toBase: v => v / 100, fromBase: v => v * 100 },
            milimetros: { name: 'Milímetros (mm)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            micrometros: { name: 'Micrómetros (µm)', toBase: v => v * 1e-6, fromBase: v => v / 1e-6 },
            nanometros: { name: 'Nanómetros (nm)', toBase: v => v * 1e-9, fromBase: v => v / 1e-9 },
            pies: { name: 'Pies (ft)', toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
            pulgadas: { name: 'Pulgadas (in)', toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
            yardas: { name: 'Yardas (yd)', toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
            millas: { name: 'Millas terrestres (mi)', toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
            millas_nauticas: { name: 'Millas Náuticas (NM)', toBase: v => v * 1852, fromBase: v => v / 1852 }
        }
    },
    masa: {
        title: "Peso y Masa",
        desc: "Medición de masa desde nivel micro hasta toneladas.",
        icon: "⚖️",
        units: {
            kilogramos: { name: 'Kilogramos (kg)', toBase: v => v, fromBase: v => v },
            gramos: { name: 'Gramos (g)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            miligramos: { name: 'Miligramos (mg)', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
            libras: { name: 'Libras (lbs)', toBase: v => v * 0.45359237, fromBase: v => v / 0.45359237 },
            onzas: { name: 'Onzas (oz)', toBase: v => v * 0.0283495231, fromBase: v => v / 0.0283495231 },
            toneladas: { name: 'Toneladas métricas (t)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            quilates: { name: 'Quilates (ct)', toBase: v => v * 0.0002, fromBase: v => v / 0.0002 },
            slug: { name: 'Slugs (slug)', toBase: v => v * 14.5939, fromBase: v => v / 14.5939 }
        }
    },
    volumen: {
        title: "Volumen",
        desc: "Capacidades métricas, imperiales y culinarias.",
        icon: "🧪",
        units: {
            litros: { name: 'Litros (L)', toBase: v => v, fromBase: v => v },
            mililitros: { name: 'Mililitros (mL)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            metros_cubicos: { name: 'Metros cúbicos (m³)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            galones_us: { name: 'Galones (US gal)', toBase: v => v * 3.785411784, fromBase: v => v / 3.785411784 },
            galones_uk: { name: 'Galones Imperiales (UK gal)', toBase: v => v * 4.54609, fromBase: v => v / 4.54609 },
            pies_cubicos: { name: 'Pies cúbicos (ft³)', toBase: v => v * 28.3168466, fromBase: v => v / 28.3168466 },
            pulgadas_cubicas: { name: 'Pulgadas cúbicas (in³)', toBase: v => v * 0.016387064, fromBase: v => v / 0.016387064 },
            tazas: { name: 'Tazas (US Cup)', toBase: v => v * 0.236588, fromBase: v => v / 0.236588 }
        }
    },
    area: {
        title: "Área",
        desc: "Superficies territoriales y dimensiones planas.",
        icon: "📐",
        units: {
            metros_cuadrados: { name: 'Metros cuadrados (m²)', toBase: v => v, fromBase: v => v },
            kilometros_cuadrados: { name: 'Kilómetros cuadrados (km²)', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            centimetros_cuadrados: { name: 'Centímetros cuadrados (cm²)', toBase: v => v * 1e-4, fromBase: v => v / 1e-4 },
            hectareas: { name: 'Hectáreas (ha)', toBase: v => v * 10000, fromBase: v => v / 10000 },
            acres: { name: 'Acres (ac)', toBase: v => v * 4046.85642, fromBase: v => v / 4046.85642 },
            pies_cuadrados: { name: 'Pies cuadrados (ft²)', toBase: v => v * 0.092903, fromBase: v => v / 0.092903 }
        }
    },
    angulo: {
        title: "Ángulo",
        desc: "Medidas trigonométricas y de rotación.",
        icon: "🔄",
        units: {
            grados: { name: 'Grados (°)', toBase: v => v, fromBase: v => v },
            radianes: { name: 'Radianes (rad)', toBase: v => v * (180 / Math.PI), fromBase: v => v * (Math.PI / 180) },
            gradianes: { name: 'Gradianes (grad)', toBase: v => v * 0.9, fromBase: v => v / 0.9 },
            revoluciones: { name: 'Revoluciones / Vueltas (rev)', toBase: v => v * 360, fromBase: v => v / 360 },
            minutos_arco: { name: 'Minutos de arco (\')', toBase: v => v / 60, fromBase: v => v * 60 },
            segundos_arco: { name: 'Segundos de arco (\'\')', toBase: v => v / 3600, fromBase: v => v * 3600 }
        }
    },
    temperatura: {
        title: "Temperatura",
        desc: "Escalas térmicas absolutas y relativas.",
        icon: "🌡️",
        units: {
            celsius: { name: 'Celsius (°C)', toBase: v => v, fromBase: v => v },
            fahrenheit: { name: 'Fahrenheit (°F)', toBase: v => (v - 32) * 5/9, fromBase: v => (v * 9/5) + 32 },
            kelvin: { name: 'Kelvin (K)', toBase: v => v - 273.15, fromBase: v => v + 273.15 },
            rankine: { name: 'Rankine (°R)', toBase: v => (v - 491.67) * 5/9, fromBase: v => (v * 9/5) + 491.67 }
        }
    },
    energia: {
        title: "Energía y Trabajo",
        desc: "Joules, calorías, vatios-hora y energía térmica.",
        icon: "⚡",
        units: {
            julios: { name: 'Julios (J)', toBase: v => v, fromBase: v => v },
            kilojulios: { name: 'Kilojulios (kJ)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            calorias: { name: 'Calorías (cal)', toBase: v => v * 4.184, fromBase: v => v / 4.184 },
            kilocalorias: { name: 'Kilocalorías / Caloría dietética (kcal)', toBase: v => v * 4184, fromBase: v => v / 4184 },
            vatios_hora: { name: 'Vatios-hora (Wh)', toBase: v => v * 3600, fromBase: v => v / 3600 },
            kilovatios_hora: { name: 'Kilovatios-hora (kWh)', toBase: v => v * 3.6e6, fromBase: v => v / 3.6e6 },
            electronvoltios: { name: 'Electronvoltios (eV)', toBase: v => v * 1.602176634e-19, fromBase: v => v / 1.602176634e-19 },
            btu: { name: 'BTU (British Thermal Unit)', toBase: v => v * 1055.06, fromBase: v => v / 1055.06 }
        }
    },
    potencia: {
        title: "Potencia",
        desc: "Razón de transferencia de energía mecánica y eléctrica.",
        icon: "💡",
        units: {
            vatios: { name: 'Vatios (W)', toBase: v => v, fromBase: v => v },
            kilovatios: { name: 'Kilovatios (kW)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            megavatios: { name: 'Megavatios (MW)', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            caballos_fuerza_hp: { name: 'Caballos de Fuerza Mecánicos (HP)', toBase: v => v * 745.699872, fromBase: v => v / 745.699872 },
            caballos_vapor_cv: { name: 'Caballos de Vapor (CV)', toBase: v => v * 735.49875, fromBase: v => v / 735.49875 }
        }
    },
    presion: {
        title: "Presión",
        desc: "Fuerza aplicada por unidad de área.",
        icon: "🌪️",
        units: {
            pascales: { name: 'Pascales (Pa)', toBase: v => v, fromBase: v => v },
            hectopascales: { name: 'Hectopascales / Milibares (hPa/mbar)', toBase: v => v * 100, fromBase: v => v / 100 },
            bares: { name: 'Bares (bar)', toBase: v => v * 100000, fromBase: v => v / 100000 },
            atmosferas: { name: 'Atmósferas estándar (atm)', toBase: v => v * 101325, fromBase: v => v / 101325 },
            psi: { name: 'Libras por pulgada cuadrada (psi)', toBase: v => v * 6894.757, fromBase: v => v / 6894.757 },
            torr_mmhg: { name: 'Torr / mmHg', toBase: v => v * 133.322, fromBase: v => v / 133.322 }
        }
    },
    fuerza: {
        title: "Fuerza",
        desc: "Interacciones mecánicas y gravitatorias.",
        icon: "🏹",
        units: {
            newtons: { name: 'Newtons (N)', toBase: v => v, fromBase: v => v },
            kilonewtons: { name: 'Kilonewtons (kN)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            dinas: { name: 'Dinas (dyn)', toBase: v => v * 1e-5, fromBase: v => v / 1e-5 },
            kilogramo_fuerza: { name: 'Kilogramo-fuerza / Kilopondio (kgf)', toBase: v => v * 9.80665, fromBase: v => v / 9.80665 },
            libra_fuerza: { name: 'Libra-fuerza (lbf)', toBase: v => v * 4.448222, fromBase: v => v / 4.448222 }
        }
    },
    torque: {
        title: "Par Motor / Torque",
        desc: "Momento de fuerza y torsión mecánica.",
        icon: "🔧",
        units: {
            newton_metro: { name: 'Newton-metro (N·m)', toBase: v => v, fromBase: v => v },
            libra_pie: { name: 'Libra-pie (lb·ft)', toBase: v => v * 1.355818, fromBase: v => v / 1.355818 },
            libra_pulgada: { name: 'Libra-pulgada (lb·in)', toBase: v => v * 0.1129848, fromBase: v => v / 0.1129848 },
            kilopondio_metro: { name: 'Kilopondio-metro (kp·m)', toBase: v => v * 9.80665, fromBase: v => v / 9.80665 }
        }
    },
    velocidad: {
        title: "Velocidad",
        desc: "Rapidez y cinemática en transporte y física.",
        icon: "🚀",
        units: {
            ms: { name: 'Metros por segundo (m/s)', toBase: v => v, fromBase: v => v },
            kmh: { name: 'Kilómetros por hora (km/h)', toBase: v => v / 3.6, fromBase: v => v * 3.6 },
            mph: { name: 'Millas por hora (mph)', toBase: v => v * 0.44704, fromBase: v => v / 0.44704 },
            nudos: { name: 'Nudos (kn / kt)', toBase: v => v * 0.514444, fromBase: v => v / 0.514444 },
            pies_por_segundo: { name: 'Pies por segundo (ft/s)', toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
            mach: { name: 'Mach (en aire estándar)', toBase: v => v * 340.29, fromBase: v => v / 340.29 }
        }
    },
    tiempo: {
        title: "Tiempo",
        desc: "Duraciones desde milisegundos hasta semanas.",
        icon: "⏱️",
        units: {
            segundos: { name: 'Segundos (s)', toBase: v => v, fromBase: v => v },
            milisegundos: { name: 'Milisegundos (ms)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            microsegundos: { name: 'Microsegundos (µs)', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
            nanosegundos: { name: 'Nanosegundos (ns)', toBase: v => v / 1e9, fromBase: v => v * 1e9 },
            minutos: { name: 'Minutos (min)', toBase: v => v * 60, fromBase: v => v / 60 },
            horas: { name: 'Horas (h)', toBase: v => v * 3600, fromBase: v => v / 3600 },
            dias: { name: 'Días', toBase: v => v * 86400, fromBase: v => v / 86400 },
            semanas: { name: 'Semanas', toBase: v => v * 604800, fromBase: v => v / 604800 }
        }
    },
    densidad: {
        title: "Densidad",
        desc: "Relación entre masa y volumen.",
        icon: "🧱",
        units: {
            kg_m3: { name: 'kg/m³', toBase: v => v, fromBase: v => v },
            g_cm3: { name: 'g/cm³ (g/mL)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            lb_ft3: { name: 'Libras por pie cúbico (lb/ft³)', toBase: v => v * 16.018463, fromBase: v => v / 16.018463 },
            lb_in3: { name: 'Libras por pulgada cúbica (lb/in³)', toBase: v => v * 27679.9, fromBase: v => v / 27679.9 }
        }
    },
    caudal_volumetrico: {
        title: "Caudal Volumétrico",
        desc: "Volumen de fluido por unidad de tiempo.",
        icon: "🌊",
        units: {
            l_s: { name: 'Litros por segundo (L/s)', toBase: v => v, fromBase: v => v },
            m3_h: { name: 'Metros cúbicos por hora (m³/h)', toBase: v => v / 3.6, fromBase: v => v * 3.6 },
            gpm: { name: 'Galones por minuto (GPM US)', toBase: v => v * 0.06309, fromBase: v => v / 0.06309 },
            cfm: { name: 'Pies cúbicos por minuto (CFM)', toBase: v => v * 0.471947, fromBase: v => v / 0.471947 }
        }
    },
    caudal_masico: {
        title: "Caudal Másico",
        desc: "Masa transportada por conducto por tiempo.",
        icon: "💨",
        units: {
            kg_s: { name: 'Kilogramos por segundo (kg/s)', toBase: v => v, fromBase: v => v },
            g_s: { name: 'Gramos por segundo (g/s)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            t_h: { name: 'Toneladas por hora (t/h)', toBase: v => v / 3.6, fromBase: v => v * 3.6 },
            lb_h: { name: 'Libras por hora (lb/h)', toBase: v => v * 0.000125998, fromBase: v => v / 0.000125998 }
        }
    },
    viscosidad_dinamica: {
        title: "Viscosidad Dinámica",
        desc: "Resistencia interna al flujo de fluidos.",
        icon: "🍯",
        units: {
            pa_s: { name: 'Pascal-segundo (Pa·s)', toBase: v => v, fromBase: v => v },
            poise: { name: 'Poise (P)', toBase: v => v * 0.1, fromBase: v => v / 0.1 },
            centipoise: { name: 'Centipoise (cP)', toBase: v => v * 0.001, fromBase: v => v / 0.001 }
        }
    },
    viscosidad_cinematica: {
        title: "Viscosidad Cinemática",
        desc: "Relación entre viscosidad dinámica y densidad.",
        icon: "💧",
        units: {
            m2_s: { name: 'Metro cuadrado por segundo (m²/s)', toBase: v => v, fromBase: v => v },
            stokes: { name: 'Stokes (St)', toBase: v => v * 1e-4, fromBase: v => v / 1e-4 },
            centistokes: { name: 'Centistokes (cSt)', toBase: v => v * 1e-6, fromBase: v => v / 1e-6 }
        }
    },
    corriente: {
        title: "Corriente Eléctrica",
        desc: "Flujo de carga por un conductor.",
        icon: "🔌",
        units: {
            amperios: { name: 'Amperios (A)', toBase: v => v, fromBase: v => v },
            miliamperios: { name: 'Miliamperios (mA)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            microamperios: { name: 'Microamperios (µA)', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
            kiloamperios: { name: 'Kiloamperios (kA)', toBase: v => v * 1000, fromBase: v => v / 1000 }
        }
    },
    voltaje: {
        title: "Voltaje / Potencial Eléctrico",
        desc: "Diferencia de potencial eléctrico.",
        icon: "⚡",
        units: {
            voltios: { name: 'Voltios (V)', toBase: v => v, fromBase: v => v },
            milivoltios: { name: 'Milivoltios (mV)', toBase: v => v / 1000, fromBase: v => v * 1000 },
            kilovoltios: { name: 'Kilovoltios (kV)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            microvoltios: { name: 'Microvoltios (µV)', toBase: v => v / 1e6, fromBase: v => v * 1e6 }
        }
    },
    resistencia: {
        title: "Resistencia Eléctrica",
        desc: "Oposición al flujo de corriente.",
        icon: "Ω",
        units: {
            ohmios: { name: 'Ohmios (Ω)', toBase: v => v, fromBase: v => v },
            kiloohmios: { name: 'Kiloohmios (kΩ)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            megaohmios: { name: 'Megaohmios (MΩ)', toBase: v => v * 1e6, fromBase: v => v / 1e6 }
        }
    },
    capacitancia: {
        title: "Capacitancia",
        desc: "Almacenamiento de carga eléctrica.",
        icon: "🔋",
        units: {
            faradios: { name: 'Faradios (F)', toBase: v => v, fromBase: v => v },
            microfaradios: { name: 'Microfaradios (µF)', toBase: v => v * 1e-6, fromBase: v => v / 1e-6 },
            nanofaradios: { name: 'Nanofaradios (nF)', toBase: v => v * 1e-9, fromBase: v => v / 1e-9 },
            picofaradios: { name: 'Picofaradios (pF)', toBase: v => v * 1e-12, fromBase: v => v / 1e-12 }
        }
    },
    carga_electrica: {
        title: "Carga Eléctrica",
        desc: "Cantidad de electricidad y capacidad de baterías.",
        icon: "🪫",
        units: {
            culombios: { name: 'Culombios (C)', toBase: v => v, fromBase: v => v },
            amperio_hora: { name: 'Amperios-hora (Ah)', toBase: v => v * 3600, fromBase: v => v / 3600 },
            miliamperio_hora: { name: 'Miliamperios-hora (mAh)', toBase: v => v * 3.6, fromBase: v => v / 3.6 }
        }
    },
    datos: {
        title: "Almacenamiento Digital",
        desc: "Capacidad de datos (decimal y binario IEC).",
        icon: "💾",
        units: {
            bytes: { name: 'Bytes (B)', toBase: v => v, fromBase: v => v },
            kilobytes: { name: 'Kilobytes (KB - 10³)', toBase: v => v * 1000, fromBase: v => v / 1000 },
            megabytes: { name: 'Megabytes (MB - 10⁶)', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            gigabytes: { name: 'Gigabytes (GB - 10⁹)', toBase: v => v * 1e9, fromBase: v => v / 1e9 },
            terabytes: { name: 'Terabytes (TB - 10¹²)', toBase: v => v * 1e12, fromBase: v => v / 1e12 },
            kibibytes: { name: 'Kibibytes (KiB - 2¹⁰)', toBase: v => v * 1024, fromBase: v => v / 1024 },
            mebibytes: { name: 'Mebibytes (MiB - 2²⁰)', toBase: v => v * 1048576, fromBase: v => v / 1048576 },
            gibibytes: { name: 'Gibibytes (GiB - 2³⁰)', toBase: v => v * 1073741824, fromBase: v => v / 1073741824 }
        }
    },
    tasa_transferencia: {
        title: "Transferencia de Datos",
        desc: "Velocidad de redes e internet (ancho de banda).",
        icon: "🌐",
        units: {
            bps: { name: 'Bits por segundo (bps)', toBase: v => v, fromBase: v => v },
            kbps: { name: 'Kilobits por segundo (Kbps)', toBase: v => v * 1e3, fromBase: v => v / 1e3 },
            mbps: { name: 'Megabits por segundo (Mbps)', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            gbps: { name: 'Gigabits por segundo (Gbps)', toBase: v => v * 1e9, fromBase: v => v / 1e9 },
            mb_s: { name: 'Megabytes por segundo (MB/s)', toBase: v => v * 8e6, fromBase: v => v / 8e6 }
        }
    },
    frecuencia: {
        title: "Frecuencia",
        desc: "Oscilaciones y ciclos por segundo.",
        icon: "📻",
        units: {
            hercios: { name: 'Hercios (Hz)', toBase: v => v, fromBase: v => v },
            kilohercios: { name: 'Kilohercios (kHz)', toBase: v => v * 1e3, fromBase: v => v / 1e3 },
            megahercios: { name: 'Megahercios (MHz)', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
            gigahercios: { name: 'Gigahercios (GHz)', toBase: v => v * 1e9, fromBase: v => v / 1e9 },
            rpm: { name: 'Revoluciones por minuto (RPM)', toBase: v => v / 60, fromBase: v => v * 60 }
        }
    },
    iluminacion: {
        title: "Iluminación",
        desc: "Nivel de iluminancia sobre superficies.",
        icon: "🔦",
        units: {
            lux: { name: 'Lux (lx)', toBase: v => v, fromBase: v => v },
            foot_candle: { name: 'Foot-candle (fc)', toBase: v => v * 10.7639, fromBase: v => v / 10.7639 },
            phot: { name: 'Phot (ph)', toBase: v => v * 10000, fromBase: v => v / 10000 }
        }
    },
    consumo_combustible: {
        title: "Consumo de Combustible",
        desc: "Eficiencia de motores y vehículos.",
        icon: "⛽",
        units: {
            l_100km: { name: 'Litros por 100 km (L/100km)', toBase: v => v, fromBase: v => v },
            km_l: { name: 'Kilómetros por litro (km/L)', toBase: v => (v === 0 ? 0 : 100 / v), fromBase: v => (v === 0 ? 0 : 100 / v) },
            mpg_us: { name: 'Millas por galón (US MPG)', toBase: v => (v === 0 ? 0 : 235.215 / v), fromBase: v => (v === 0 ? 0 : 235.215 / v) },
            mpg_uk: { name: 'Millas por galón (UK MPG)', toBase: v => (v === 0 ? 0 : 282.481 / v), fromBase: v => (v === 0 ? 0 : 282.481 / v) }
        }
    }
};
// ==============================================================
// MÓDULO EDUCATIVO
// Formato numérico, análisis de unidades y memoria de cálculo.
// Se apoya en la base de datos de precisión (conversions) sin modificarla:
// el factor de cada unidad se deduce de su función toBase().
// ==============================================================
const SUPERSCRIPT = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };

function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Formato del resultado (idéntico al que muestra el conversor)
function formatNumber(n) {
    const abs = Math.abs(n);
    if (n === 0) return '0';
    if (abs >= 1e12 || abs < 1e-4) return n.toExponential(6);
    return parseFloat(n.toFixed(6)).toString();
}

// Formato de factores: hasta 10 cifras significativas y notación científica con superíndices
function fmtSci(n) {
    if (n === 0) return '0';
    const abs = Math.abs(n);
    if (abs >= 1e7 || abs < 1e-3) {
        const [m, e] = n.toExponential(9).split('e');
        const mant = parseFloat(m).toString();
        const exp = String(parseInt(e, 10)).split('').map(ch => SUPERSCRIPT[ch]).join('');
        return mant === '1' ? `10${exp}` : `${mant} × 10${exp}`;
    }
    return parseFloat(n.toPrecision(10)).toString();
}

// Los negativos se encierran entre paréntesis dentro de las sustituciones
const wrapNeg = s => (String(s).startsWith('-') ? `(${s})` : s);

// Símbolo corto de una unidad: "Centímetros (cm)" → "cm"
function unitSymbol(unit) {
    const m = unit.name.match(/\(([^)]+)\)\s*$/);
    if (m) {
        const inner = m[1].split(' - ')[0].trim();
        if (inner.length <= 8) return inner;
    }
    return unit.name.replace(/\s*\(.*\)\s*$/, '').trim();
}

// Clasifica la regla de una unidad respecto a la base: lineal, afín (con desfase) o inversa
function analyzeUnit(unit) {
    const f0 = unit.toBase(0), f1 = unit.toBase(1), f2 = unit.toBase(2);
    const d1 = f1 - f0, d2 = f2 - f1;
    const isLinear = Math.abs(d2 - d1) <= 1e-9 * Math.max(Math.abs(d1), Math.abs(d2));
    if (isLinear) {
        return Math.abs(f0) > 1e-12 * Math.abs(d1)
            ? { type: 'affine', k: d1, off: f0 }
            : { type: 'linear', k: d1 };
    }
    return { type: 'inverse', k: f1 }; // base = K / valor
}

// Fórmulas especiales de temperatura (la unidad base es °C)
const TEMP_RULES = {
    celsius:    { toRule: '°C = °C (sin cambio)',        toSub: x => x.replace(/^\((.*)\)$/, '$1'), fromRule: '°C = °C (sin cambio)', fromSub: c => c.replace(/^\((.*)\)$/, '$1') },
    fahrenheit: { toRule: '°C = (°F − 32) × 5/9',        toSub: x => `(${x} − 32) × 5/9`,          fromRule: '°F = °C × 9/5 + 32',   fromSub: c => `${c} × 9/5 + 32` },
    kelvin:     { toRule: '°C = K − 273.15',             toSub: x => `${x} − 273.15`,              fromRule: 'K = °C + 273.15',      fromSub: c => `${c} + 273.15` },
    rankine:    { toRule: '°C = (°R − 491.67) × 5/9',    toSub: x => `(${x} − 491.67) × 5/9`,      fromRule: '°R = °C × 9/5 + 491.67', fromSub: c => `${c} × 9/5 + 491.67` }
};

// Reglas textuales y de sustitución para una unidad según su tipo
function describeUnit(an, sym, baseSym) {
    if (an.type === 'inverse') {
        return {
            inverse: true,
            toRule: 'Valor base = K ÷ Valor',
            toSub: x => `${fmtSci(an.k)} ÷ ${x}`,
            fromRule: 'Resultado = K ÷ Valor base',
            fromSub: b => `${fmtSci(an.k)} ÷ ${b}`,
            info: `K = ${fmtSci(an.k)} (relación inversa entre ${sym} y ${baseSym})`
        };
    }
    if (an.type === 'affine') {
        return {
            toRule: 'Valor base = Valor × k + c',
            toSub: x => `${x} × ${fmtSci(an.k)} + ${wrapNeg(fmtSci(an.off))}`,
            fromRule: 'Resultado = (Valor base − c) ÷ k',
            fromSub: b => `(${b} − ${wrapNeg(fmtSci(an.off))}) ÷ ${fmtSci(an.k)}`,
            info: `k = ${fmtSci(an.k)}, c = ${fmtSci(an.off)}`
        };
    }
    return {
        toRule: 'Valor base = Valor × f',
        toSub: x => `${x} × ${fmtSci(an.k)}`,
        fromRule: 'Resultado = Valor base ÷ f',
        fromSub: b => `${b} ÷ ${fmtSci(an.k)}`,
        info: `f: 1 ${sym} = ${fmtSci(an.k)} ${baseSym}`
    };
}

// Construye el desglose metodológico de una conversión
function buildProcedure(catKey, fromKey, toKey, val) {
    const cat = conversions[catKey];
    const from = cat.units[fromKey], to = cat.units[toKey];
    const baseUnit = cat.units[Object.keys(cat.units)[0]];
    const baseSym = unitSymbol(baseUnit), fromSym = unitSymbol(from), toSym = unitSymbol(to);
    const isTemp = catKey === 'temperatura';
    const base = from.toBase(val);
    const result = to.fromBase(base);
    const label = isTemp ? 'Temperatura en °C' : 'Valor base';

    let dFrom, dTo, aFrom = null, aTo = null;
    if (isTemp) {
        dFrom = TEMP_RULES[fromKey];
        dTo = TEMP_RULES[toKey];
    } else {
        aFrom = analyzeUnit(from);
        aTo = analyzeUnit(to);
        dFrom = describeUnit(aFrom, fromSym, baseSym);
        dTo = describeUnit(aTo, toSym, baseSym);
    }

    const steps = [];

    // 1) Fórmula o regla aplicada
    const rules = [
        `Paso A (${fromSym} → ${baseSym}):  ${dFrom.toRule}`,
        `Paso B (${baseSym} → ${toSym}):  ${dTo.fromRule}`
    ];
    [...new Set([dFrom.info, dTo.info].filter(Boolean))].forEach(i => rules.push(i));
    if (aFrom && aTo && aFrom.type === 'linear' && aTo.type === 'linear') {
        rules.push(`Factor combinado: f_origen ÷ f_destino = ${fmtSci(aFrom.k / aTo.k)}`);
    }
    if (fromKey === toKey) rules.push('Origen y destino son la misma unidad: el valor no cambia.');
    steps.push({ title: 'Fórmula o regla aplicada', lines: rules });

    // 2) Sustitución de los valores ingresados
    steps.push({
        title: 'Sustitución de los valores ingresados',
        lines: [`${label} = ${dFrom.toSub(wrapNeg(fmtSci(val)))}`]
    });

    // 3) Paso intermedio hacia la unidad base
    const mid = [`${label} = ${formatNumber(base)} ${baseSym}`];
    if (fromKey === Object.keys(cat.units)[0]) mid.push('El origen ya es la unidad base de la categoría.');
    else mid.push(`Unidad base de la categoría: ${baseUnit.name}`);
    if ((dFrom.inverse && val === 0) || (dTo.inverse && base === 0)) {
        mid.push('Con valor 0 la relación inversa no está definida; la aplicación lo trata como 0.');
    }
    steps.push({ title: 'Paso intermedio a la unidad base', lines: mid });

    // 4) Resultado final
    const finalExpr = dTo.fromSub(wrapNeg(formatNumber(base)));
    const resultText = formatNumber(result);
    steps.push({
        title: 'Resultado final',
        highlight: true,
        lines: [finalExpr === resultText
            ? `Resultado = ${resultText} ${toSym}`
            : `Resultado = ${finalExpr} = ${resultText} ${toSym}`]
    });

    return { steps, base, result, baseSym, fromSym, toSym };
}

function renderProcedureHTML(proc) {
    return '<ol class="space-y-4">' + proc.steps.map((s, i) => `
        <li class="flex gap-3">
            <span class="calc-step-num">${i + 1}</span>
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold uppercase tracking-wider text-themeText mb-1.5">${esc(s.title)}</p>
                <div class="formula-box${s.highlight ? ' formula-result' : ''}">${s.lines.map(l => `<div>${esc(l)}</div>`).join('')}</div>
            </div>
        </li>`).join('') + '</ol>';
}

// Memoria de Cálculo del conversor (se actualiza en cada conversión)
function renderCalcMemory(val) {
    const body = document.getElementById('calc-memory-body');
    if (!body) return;
    if (val === null || isNaN(val)) {
        body.innerHTML = '<p class="text-sm text-themeMuted">Ingresa un valor numérico para ver el desglose del cálculo.</p>';
        return;
    }
    const fromKey = document.getElementById('select-origen').value;
    const toKey = document.getElementById('select-destino').value;
    const cat = conversions[currentCategory];
    if (!cat || !cat.units[fromKey] || !cat.units[toKey]) return;
    const proc = buildProcedure(currentCategory, fromKey, toKey, val);
    body.innerHTML = `
        <p class="text-sm text-themeMuted mb-4">
            <span class="font-mono text-themeText">${esc(fmtSci(val))} ${esc(proc.fromSym)}</span>
            <span class="mx-1">→</span>
            <span class="font-mono font-bold text-themeAccent">${esc(formatNumber(proc.result))} ${esc(proc.toSym)}</span>
            <span class="text-xs"> · ${esc(cat.title)}</span>
        </p>` + renderProcedureHTML(proc);
}

// ==============================================================
// MÓDULO EDUCATIVO: PRÁCTICA Y QUIZ
// ==============================================================
const QUIZ_VALUES = [0.5, 1, 1.5, 2, 2.5, 3, 5, 10, 12, 15, 20, 25, 50, 75, 100, 150, 250, 500, 1000];
const QUIZ_TEMP_VALUES = [-40, -10, 0, 20, 25, 37, 60, 100, 212];
const randItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Genera un reto aleatorio validado contra la base de datos de precisión
function makeChallenge(filter) {
    const catKeys = filter && filter !== 'all' ? [filter] : Object.keys(conversions);
    for (let i = 0; i < 60; i++) {
        const catKey = randItem(catKeys);
        const keys = Object.keys(conversions[catKey].units);
        if (keys.length < 2) continue;
        const fromKey = randItem(keys), toKey = randItem(keys);
        if (fromKey === toKey) continue;
        const val = randItem(catKey === 'temperatura' ? QUIZ_TEMP_VALUES : QUIZ_VALUES);
        const units = conversions[catKey].units;
        const correct = units[toKey].fromBase(units[fromKey].toBase(val));
        const abs = Math.abs(correct);
        if (isFinite(correct) && (abs === 0 || (abs >= 1e-3 && abs <= 1e9))) {
            return { catKey, fromKey, toKey, val, correct };
        }
    }
    return { catKey: 'longitud', fromKey: 'metros', toKey: 'centimetros', val: 50, correct: 5000 };
}

// Acepta punto o coma decimal y notación científica (1.5e-3)
function parseAnswer(raw) {
    const s = String(raw).trim().replace(',', '.').replace(/\s/g, '');
    if (!/^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(s)) return NaN;
    return parseFloat(s);
}

function initQuiz() {
    const $ = id => document.getElementById(id);
    const selCat = $('quiz-category'), qText = $('quiz-question'), qSub = $('quiz-subtitle');
    const input = $('quiz-answer'), unitLbl = $('quiz-unit-label'), feedback = $('quiz-feedback');
    const btnCheck = $('btn-quiz-check'), btnSolve = $('btn-quiz-solve'), btnNext = $('btn-quiz-next');
    if (!selCat || !qText || !input) return;

    const STORE_KEY = 'unitprecise-quiz-stats';
    let stats = { correct: 0, attempts: 0, streak: 0, best: 0 };
    try {
        const saved = JSON.parse(localStorage.getItem(STORE_KEY));
        if (saved && typeof saved.correct === 'number') stats = { ...stats, ...saved };
    } catch (e) { /* sin almacenamiento disponible */ }

    let current = null;
    let answered = false;

    selCat.innerHTML = '<option value="all">Todas las categorías</option>' +
        Object.keys(conversions).map(k => `<option value="${k}">${esc(conversions[k].icon + ' ' + conversions[k].title)}</option>`).join('');

    function saveStats() {
        try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) { /* ignorar */ }
    }

    function renderStats() {
        $('stat-correct').textContent = stats.correct;
        $('stat-attempts').textContent = stats.attempts;
        $('stat-streak').textContent = stats.streak;
        $('stat-best').textContent = stats.best;
    }

    function showFeedback(kind, html, proc, openProc) {
        const styles = {
            ok: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300',
            bad: 'border-rose-500/50 bg-rose-500/10 text-rose-800 dark:text-rose-300',
            info: 'border-sky-500/50 bg-sky-500/10 text-themeText'
        }[kind];
        feedback.innerHTML = `<div class="rounded-lg border p-4 text-sm leading-relaxed ${styles}">${html}</div>` + (proc ? `
            <details class="calc-card mt-4 bg-themeCard border border-themeBorder rounded-lg"${openProc ? ' open' : ''}>
                <summary class="flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider text-themeText select-none">
                    <span>Procedimiento paso a paso</span>
                    <svg class="calc-chevron w-4 h-4 text-themeMuted" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                </summary>
                <div class="px-4 pb-4 pt-1">${renderProcedureHTML(proc)}</div>
            </details>` : '');
    }

    function newChallenge(focusInput) {
        current = makeChallenge(selCat.value);
        answered = false;
        const cat = conversions[current.catKey];
        const from = cat.units[current.fromKey], to = cat.units[current.toKey];
        const fs = unitSymbol(from), ts = unitSymbol(to);
        qText.innerHTML = `Convierte <span class="text-themeAccent font-bold">${esc(fmtSci(current.val))} ${esc(fs)}</span> a <span class="text-themeAccent font-bold">${esc(ts)}</span>`;
        qSub.textContent = `${cat.icon} ${cat.title} · ${from.name} → ${to.name}`;
        unitLbl.textContent = ts;
        input.value = '';
        input.disabled = false;
        btnCheck.disabled = false;
        btnSolve.disabled = false;
        feedback.innerHTML = '';
        if (focusInput) input.focus();
    }

    function lockChallenge() {
        answered = true;
        input.disabled = true;
        btnCheck.disabled = true;
        btnSolve.disabled = true;
        btnNext.focus();
    }

    function checkAnswer() {
        if (answered || !current) return;
        const ans = parseAnswer(input.value);
        if (isNaN(ans)) {
            showFeedback('info', 'Escribe un número válido. Puedes usar punto o coma decimal y notación científica (por ejemplo 1.5e-3).');
            return;
        }
        const exp = current.correct;
        const proc = buildProcedure(current.catKey, current.fromKey, current.toKey, current.val);
        const expText = `${formatNumber(exp)} ${proc.toSym}`;
        const ok = Math.abs(ans - exp) <= Math.max(Math.abs(exp) * 0.01, 1e-6);

        stats.attempts++;
        if (ok) {
            stats.correct++;
            stats.streak++;
            stats.best = Math.max(stats.best, stats.streak);
            const exact = Math.abs(ans - exp) <= Math.max(Math.abs(exp) * 0.0005, 1e-6);
            showFeedback('ok', `<b>¡Correcto!</b> ${exact ? `${esc(expText)} es el resultado exacto.` : `Tu respuesta está dentro del margen del 1 %. Valor preciso: <b>${esc(expText)}</b>.`}`, proc, false);
        } else {
            stats.streak = 0;
            let hint = '';
            const swapped = exp !== 0 ? (current.val * current.val) / exp : NaN;
            if (current.catKey !== 'temperatura' && isFinite(swapped) && Math.abs(ans - swapped) <= Math.max(Math.abs(swapped) * 0.01, 1e-6)) {
                hint = '<br><span class="text-xs">Pista: parece que usaste el factor al revés (multiplicaste donde debías dividir, o viceversa).</span>';
            }
            showFeedback('bad', `<b>No es correcto.</b> Tu respuesta: <span class="font-mono">${esc(formatNumber(ans))} ${esc(proc.toSym)}</span> · Respuesta esperada: <b class="font-mono">${esc(expText)}</b>.${hint}`, proc, true);
        }
        saveStats();
        renderStats();
        lockChallenge();
    }

    function revealSolution() {
        if (answered || !current) return;
        const proc = buildProcedure(current.catKey, current.fromKey, current.toKey, current.val);
        stats.attempts++;
        stats.streak = 0;
        saveStats();
        renderStats();
        showFeedback('info', `Solución: <b class="font-mono">${esc(formatNumber(current.correct))} ${esc(proc.toSym)}</b>. Revisa el procedimiento y prueba con un nuevo reto.`, proc, true);
        lockChallenge();
    }

    btnCheck.addEventListener('click', checkAnswer);
    btnSolve.addEventListener('click', revealSolution);
    btnNext.addEventListener('click', () => newChallenge(true));
    selCat.addEventListener('change', () => newChallenge(false));
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); checkAnswer(); }
    });
    $('btn-quiz-reset').addEventListener('click', () => {
        if (!confirm('¿Reiniciar tus estadísticas de práctica?')) return;
        stats = { correct: 0, attempts: 0, streak: 0, best: 0 };
        saveStats();
        renderStats();
    });

    renderStats();
    newChallenge(false);
}

// ==============================================================
// MÓDULO EDUCATIVO: "¿SABÍAS QUE...?" (curiosidades del SI)
// ==============================================================
const siFacts = [
    { tag: 'Metro', year: '1793 → 1983', title: 'El metro pasó de la Tierra a la luz',
      text: 'En 1793 Francia definió el metro como la diezmillonésima parte de la distancia entre el polo norte y el ecuador. Desde 1983 se define con la velocidad de la luz: es la distancia que recorre la luz en el vacío en 1/299 792 458 de segundo.' },
    { tag: 'Kilogramo', year: '2019', title: 'El kilogramo ya no depende de un objeto',
      text: 'Durante más de 130 años el kilogramo fue un cilindro de platino-iridio guardado cerca de París. Desde el 20 de mayo de 2019 se define fijando la constante de Planck en exactamente 6.62607015 × 10⁻³⁴ J·s.' },
    { tag: 'Segundo', year: '1967', title: 'El segundo y los relojes atómicos',
      text: 'Antes se definía como una fracción del día solar. Desde 1967 equivale a 9 192 631 770 periodos de la radiación del átomo de cesio-133, base de los relojes extremadamente estables que sostienen sistemas como el GPS.' },
    { tag: 'Kelvin', year: '2019', title: 'La temperatura ahora se define con la constante de Boltzmann',
      text: 'Hasta 2019 el kelvin se basaba en el punto triple del agua (273.16 K). Hoy se define fijando k = 1.380649 × 10⁻²³ J/K, así que ya no depende de una sustancia concreta.' },
    { tag: 'Amperio y mol', year: '2019', title: 'Constantes fijas para el amperio y el mol',
      text: 'La revisión de 2019 fijó la carga elemental e = 1.602176634 × 10⁻¹⁹ C y la constante de Avogadro N_A = 6.02214076 × 10²³ mol⁻¹. Ese valor de e es el que usa UnitPrecise para convertir electronvoltios a julios.' },
    { tag: 'SI', year: '1960', title: 'Nace el Sistema Internacional de Unidades',
      text: 'La 11.ª Conferencia General de Pesas y Medidas adoptó oficialmente el SI en 1960. Hoy cuenta con siete unidades base: metro, kilogramo, segundo, amperio, kelvin, mol y candela.' },
    { tag: 'Celsius', year: '1742', title: 'La escala Celsius original estaba al revés',
      text: 'Anders Celsius propuso una escala en la que 0 era el punto de ebullición del agua y 100 el de congelación. Se invirtió poco después de su muerte, dando origen a la escala que usamos hoy.' },
    { tag: 'Pulgada', year: '1959', title: 'La pulgada se define a partir del metro',
      text: 'Desde el acuerdo internacional de 1959, la pulgada mide exactamente 25.4 mm, la yarda 0.9144 m y la libra 0.45359237 kg. Por eso esos factores de conversión son exactos.' },
    { tag: 'Errores de unidades', year: '1999', title: 'El Mars Climate Orbiter',
      text: 'La sonda de la NASA, valorada en unos 125 millones de dólares, se perdió al llegar a Marte porque un software entregaba impulsos en libras-fuerza·segundo y otro los esperaba en newton·segundo.' },
    { tag: 'Errores de unidades', year: '1983', title: 'El "planeador de Gimli"',
      text: 'Un Boeing 767 de Air Canada se quedó sin combustible en pleno vuelo porque la carga se calculó en libras en lugar de kilogramos. Los pilotos lograron planear hasta un aterrizaje sin víctimas mortales.' }
];

function mountFactsCarousel(root) {
    let index = Math.floor(Math.random() * siFacts.length);
    let timer = null;
    root.innerHTML = `
        <div>
            <div class="flex items-center justify-between mb-3">
                <span data-role="tag" class="text-[10px] font-bold uppercase tracking-wider bg-themeCard border border-themeBorder text-themeAccent px-2 py-0.5 rounded"></span>
                <span data-role="year" class="text-xs font-mono text-themeMuted"></span>
            </div>
            <div data-role="body" class="fact-fade min-h-[9.5rem]" aria-live="polite">
                <h3 data-role="title" class="text-lg font-bold text-themeText mb-2"></h3>
                <p data-role="text" class="text-sm text-themeMuted leading-relaxed"></p>
            </div>
            <div class="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-themeBorder">
                <button data-role="prev" aria-label="Dato anterior" class="w-9 h-9 rounded-full border border-themeBorder text-themeText hover:border-themeAccent transition cursor-pointer">←</button>
                <div data-role="dots" class="flex flex-wrap justify-center gap-1.5"></div>
                <button data-role="next" aria-label="Siguiente dato" class="w-9 h-9 rounded-full border border-themeBorder text-themeText hover:border-themeAccent transition cursor-pointer">→</button>
            </div>
        </div>`;
    const part = name => root.querySelector(`[data-role="${name}"]`);
    const dots = part('dots');

    siFacts.forEach((_, i) => {
        const d = document.createElement('button');
        d.setAttribute('aria-label', `Ir al dato ${i + 1}`);
        d.className = 'w-2 h-2 rounded-full cursor-pointer transition';
        d.addEventListener('click', () => { index = i; render(); restart(); });
        dots.appendChild(d);
    });

    function render() {
        const f = siFacts[index];
        part('tag').textContent = f.tag;
        part('year').textContent = f.year;
        part('title').textContent = f.title;
        part('text').textContent = f.text;
        [...dots.children].forEach((d, i) => {
            d.classList.toggle('bg-themeAccent', i === index);
            d.classList.toggle('bg-themeBorder', i !== index);
        });
        const body = part('body');
        body.classList.remove('fact-fade');
        void body.offsetWidth; // reinicia la animación
        body.classList.add('fact-fade');
    }
    function go(step) { index = (index + step + siFacts.length) % siFacts.length; render(); }
    function stop() { clearInterval(timer); timer = null; }
    function start() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        stop();
        timer = setInterval(() => { if (root.offsetParent !== null) go(1); }, 12000);
    }
    function restart() { stop(); start(); }

    part('prev').addEventListener('click', () => { go(-1); restart(); });
    part('next').addEventListener('click', () => { go(1); restart(); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    render();
    start();
}

// Estado Global
let currentCategory = 'longitud';
let historyData = [];
document.addEventListener('DOMContentLoaded', () => {
    initThemeManager();
    // Referencias DOM
    const navButtons = document.querySelectorAll('.nav-tab');
    const views = document.querySelectorAll('.view-section');
    const inputValor = document.getElementById('input-valor');
    const selectOrigen = document.getElementById('select-origen');
    const selectDestino = document.getElementById('select-destino');
    const labelResultado = document.getElementById('label-resultado');
    const outputVisual = document.getElementById('output-visual');
    const labelUnidadDestino = document.getElementById('label-unidad-destino');
    const converterTitle = document.getElementById('converter-title');
    const quickCategories = document.getElementById('quick-categories');
    const categoriesGrid = document.getElementById('categories-grid');
    const categorySearch = document.getElementById('category-search');
    const headerLogo = document.getElementById('header-logo');
    const btnAboutLogo = document.getElementById('btn-about-logo');
    // Inicialización
    switchView('view-categories');
    renderQuickCategoryBar();
    renderCategoriesGrid('');
    loadCategory(currentCategory);
    initQuiz();
    document.querySelectorAll('[data-facts-carousel]').forEach(mountFactsCarousel);
    // Eventos de Navegación
    document.getElementById('nav-categories').addEventListener('click', () => switchView('view-categories'));
    document.getElementById('nav-converter').addEventListener('click', () => switchView('view-converter'));
    document.getElementById('nav-quiz').addEventListener('click', () => switchView('view-quiz'));
    document.getElementById('nav-settings').addEventListener('click', () => switchView('view-settings'));
    document.getElementById('nav-about').addEventListener('click', () => switchView('view-about'));
    if (headerLogo) {
        headerLogo.addEventListener('click', () => switchView('view-categories'));
    }
    if (btnAboutLogo) {
        btnAboutLogo.addEventListener('click', () => switchView('view-about'));
    }
    // Buscador de Categorías
    if (categorySearch) {
        categorySearch.addEventListener('input', (e) => {
            renderCategoriesGrid(e.target.value.toLowerCase().trim());
        });
    }
    // Eventos de Conversión
    inputValor.addEventListener('input', calculate);
    selectOrigen.addEventListener('change', calculate);
    selectDestino.addEventListener('change', calculate);

    document.getElementById('btn-swap').addEventListener('click', () => {
        const temp = selectOrigen.value;
        selectOrigen.value = selectDestino.value;
        selectDestino.value = temp;
        calculate();
    });
    document.getElementById('btn-calcular').addEventListener('click', () => {
        calculate();
        addToHistory();
    });
    document.getElementById('btn-copiar').addEventListener('click', () => {
        navigator.clipboard.writeText(labelResultado.textContent);
        alert("¡Resultado copiado al portapapeles!");
    });
    const btnClearHistory = document.getElementById('btn-clear-history');
    if (btnClearHistory) {
        btnClearHistory.addEventListener('click', () => {
            historyData = [];
            renderHistory();
        });
    }
    // --- FUNCIONES DE NAVEGACIÓN Y VISTAS ---
    function switchView(viewId) {
        views.forEach(v => v.classList.remove('active'));
        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.add('active');
        navButtons.forEach(btn => {
            btn.classList.remove('text-themeAccent', 'border-b-2', 'border-themeAccent');
            btn.classList.add('text-themeMuted');
        });
        const activeBtn = document.getElementById(viewId.replace('view-', 'nav-'));
        if (activeBtn) {
            activeBtn.classList.remove('text-themeMuted');
            activeBtn.classList.add('text-themeAccent', 'border-b-2', 'border-themeAccent');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function renderQuickCategoryBar() {
        quickCategories.innerHTML = '';
        const catKeys = Object.keys(conversions);

        catKeys.forEach(catKey => {
            const cat = conversions[catKey];
            const isActive = catKey === currentCategory;
            const btn = document.createElement('button');
            btn.className = `flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition cursor-pointer ${
                isActive 
                    ? 'bg-themeAccent text-white shadow' 
                    : 'bg-themeCard text-themeMuted border border-themeBorder hover:text-themeText'
            }`;
            btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.title}</span>`;
            btn.onclick = () => {
                currentCategory = catKey;
                renderQuickCategoryBar();
                loadCategory(catKey);
            };
            quickCategories.appendChild(btn);
        });
    }
    function renderCategoriesGrid(filter = '') {
        categoriesGrid.innerHTML = '';
        const catKeys = Object.keys(conversions);
        const filteredKeys = catKeys.filter(key => {
            const cat = conversions[key];
            return cat.title.toLowerCase().includes(filter) || cat.desc.toLowerCase().includes(filter) || key.includes(filter);
        });
        if (filteredKeys.length === 0) {
            categoriesGrid.innerHTML = `
                <div class="col-span-full text-center py-12 text-themeMuted">
                    No se encontraron categorías que coincidan con la búsqueda.
                </div>
            `;
            return;
        }
        filteredKeys.forEach(catKey => {
            const cat = conversions[catKey];
            const unitCount = Object.keys(cat.units).length;
            const div = document.createElement('div');
            div.className = "bg-themeCard border border-themeBorder rounded-xl p-5 flex flex-col justify-between hover:border-themeAccent hover:shadow-md transition cursor-pointer group";

            div.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">${cat.icon}</span>
                        <span class="text-[10px] bg-themeInput border border-themeBorder px-2 py-0.5 rounded text-themeMuted font-mono">${unitCount} UNIDADES</span>
                    </div>
                    <h3 class="text-base font-bold text-themeText mb-1 group-hover:text-themeAccent transition-colors">${cat.title}</h3>
                    <p class="text-xs text-themeMuted leading-relaxed mb-4">${cat.desc}</p>
                </div>
                <button class="w-full text-left font-semibold text-xs text-themeAccent flex items-center justify-between pt-2 border-t border-themeBorder">
                    <span>ABRIR CONVERSOR</span>
                    <span>→</span>
                </button>
            `;
            div.onclick = () => {
                currentCategory = catKey;
                renderQuickCategoryBar();
                loadCategory(catKey);
                switchView('view-converter');
            };
            categoriesGrid.appendChild(div);
        });
    }
    function loadCategory(catKey) {
        const catData = conversions[catKey];
        if (!catData) return;
        converterTitle.textContent = `Conversor de ${catData.title}`;
        const unitKeys = Object.keys(catData.units);

        selectOrigen.innerHTML = '';
        selectDestino.innerHTML = '';

        unitKeys.forEach(unitKey => {
            const opt1 = document.createElement('option');
            opt1.value = unitKey;
            opt1.textContent = catData.units[unitKey].name;
            selectOrigen.appendChild(opt1);
            const opt2 = document.createElement('option');
            opt2.value = unitKey;
            opt2.textContent = catData.units[unitKey].name;
            selectDestino.appendChild(opt2);
        });
        if (unitKeys.length > 1) {
            selectDestino.value = unitKeys[1];
        }
        calculate();
    }
    function calculate() {
        const val = parseFloat(inputValor.value);
        if (isNaN(val)) {
            labelResultado.textContent = "0.000";
            outputVisual.textContent = "0.000";
            renderCalcMemory(null);
            return;
        }
        const category = conversions[currentCategory];
        if (!category) return;
        const fromObj = category.units[selectOrigen.value];
        const toObj = category.units[selectDestino.value];
        if (!fromObj || !toObj) return;
        const baseVal = fromObj.toBase(val);
        const finalVal = toObj.fromBase(baseVal);
        const formattedResult = formatNumber(finalVal);

        labelResultado.textContent = formattedResult;
        outputVisual.textContent = formattedResult;
        labelUnidadDestino.textContent = toObj.name;
        renderCalcMemory(val);
    }
    function addToHistory() {
        const val = parseFloat(inputValor.value);
        if (isNaN(val)) return;
        const category = conversions[currentCategory];
        const fromName = category.units[selectOrigen.value].name;
        const toName = category.units[selectDestino.value].name;
        const newRecord = {
            categoryTitle: category.title,
            valIn: `${val} ${fromName.split(' ')[0]}`,
            valOut: `${labelResultado.textContent} ${toName.split(' ')[0]}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };
        historyData.unshift(newRecord);
        if (historyData.length > 6) historyData.pop();

        renderHistory();
    }
    function renderHistory() {
        const container = document.getElementById('history-container');
        const list = document.getElementById('history-list');

        if (historyData.length === 0) {
            container.classList.add('hidden');
            return;
        }
        container.classList.remove('hidden');
        list.innerHTML = '';
        historyData.forEach(item => {
            const div = document.createElement('div');
            div.className = "bg-themeCard border border-themeBorder rounded-lg p-3 text-xs";
            div.innerHTML = `
                <div class="flex justify-between items-center mb-1 text-themeMuted">
                    <span class="font-bold uppercase tracking-wider text-[10px] text-themeAccent">${item.categoryTitle}</span>
                    <span class="text-[10px]">${item.timestamp}</span>
                </div>
                <div class="flex items-center justify-between text-themeText font-mono">
                    <span class="truncate max-w-[45%]">${item.valIn}</span>
                    <span class="text-themeMuted">→</span>
                    <span class="font-bold text-themeAccent truncate max-w-[45%] text-right">${item.valOut}</span>
                </div>
            `;
            list.appendChild(div);
        });
    }
    // --- GESTOR DE TEMAS (Modo Claro / Modo Oscuro) ---
    function initThemeManager() {
        const htmlElement = document.documentElement;
        const btnLight = document.getElementById('theme-light');
        const btnDark = document.getElementById('theme-dark');
        function setTheme(themeName) {
            localStorage.setItem('app-theme', themeName);
            htmlElement.classList.remove('dark');
            if (themeName === 'dark') {
                htmlElement.classList.add('dark');
            }
            [btnLight, btnDark].forEach(btn => {
                if (!btn) return;
                btn.classList.remove('border-themeAccent', 'ring-2', 'ring-themeAccent');
                btn.classList.add('border-themeBorder');
            });
            const activeBtn = themeName === 'dark' ? btnDark : btnLight;
            if (activeBtn) {
                activeBtn.classList.remove('border-themeBorder');
                activeBtn.classList.add('border-themeAccent', 'ring-2', 'ring-themeAccent');
            }
        }
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme) {
            setTheme(savedTheme === 'high-contrast' ? 'light' : savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
        if (btnLight) btnLight.addEventListener('click', () => setTheme('light'));
        if (btnDark) btnDark.addEventListener('click', () => setTheme('dark'));
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (!localStorage.getItem('app-theme')) {
                setTheme(event.matches ? 'dark' : 'light');
            }
        });
    }
});