using JET: JET
using SubglobalSensitivityAnalysis

@testset "JET" begin
    @static if VERSION ≥ v"1.9.2"
        JET.test_package(SubglobalSensitivityAnalysis; target_modules = (@__MODULE__,))
    end
end;
# JET.report_package(MTKHelpers) # to debug the errors
# JET.report_package(MTKHelpers; target_modules=(@__MODULE__,)) # to debug the errors
