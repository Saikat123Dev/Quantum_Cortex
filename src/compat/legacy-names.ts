export const PROJECT_NAME = "openclaw" as const;

// Alternate manifest key used by some external plugins (e.g. @quantumhashcorporation/*).
export const LEGACY_PROJECT_NAMES = ["Quantum_Cortex"] as const;

export const MANIFEST_KEY = PROJECT_NAME;

export const LEGACY_MANIFEST_KEYS = LEGACY_PROJECT_NAMES;

export const LEGACY_PLUGIN_MANIFEST_FILENAMES = ["Quantum_Cortex.plugin.json"] as const;

export const LEGACY_CANVAS_HANDLER_NAMES = [] as const;

export const MACOS_APP_SOURCES_DIR = "apps/macos/Sources/OpenClaw" as const;

export const LEGACY_MACOS_APP_SOURCES_DIRS = [] as const;
