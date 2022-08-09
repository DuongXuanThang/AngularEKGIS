using DemoProject.Debugging;

namespace DemoProject
{
    public class DemoProjectConsts
    {
        public const string LocalizationSourceName = "DemoProject";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "e8c32ee801a04e339465f38cf34a034c";
    }
}
