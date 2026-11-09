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

    // Eventos de Navegación
    document.getElementById('nav-categories').addEventListener('click', () => switchView('view-categories'));
    document.getElementById('nav-converter').addEventListener('click', () => switchView('view-converter'));
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
            return;
        }

        const category = conversions[currentCategory];
        if (!category) return;

        const fromObj = category.units[selectOrigen.value];
        const toObj = category.units[selectDestino.value];

        if (!fromObj || !toObj) return;

        const baseVal = fromObj.toBase(val);
        const finalVal = toObj.fromBase(baseVal);

        let formattedResult;
        const absVal = Math.abs(finalVal);

        if (finalVal === 0) {
            formattedResult = "0";
        } else if (absVal >= 1e12 || (absVal < 1e-4 && absVal > 0)) {
            formattedResult = finalVal.toExponential(6);
        } else {
            formattedResult = parseFloat(finalVal.toFixed(6)).toString();
        }
        
        labelResultado.textContent = formattedResult;
        outputVisual.textContent = formattedResult;
        labelUnidadDestino.textContent = toObj.name;
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