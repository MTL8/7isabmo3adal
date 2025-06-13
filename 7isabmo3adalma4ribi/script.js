        const levelSubjects = {
            'primary1': [
                { id: 'p1_arabe', coeff: 1, max: 10 },
                { id: 'p1_français', coeff: 1, max: 10 },
                { id: 'p1_math', coeff: 1, max: 10 },
                { id: 'p1_islamic', coeff: 1, max: 10 }
            ],
            'primary2': [
                { id: 'p2_arabe', coeff: 1, max: 10 },
                { id: 'p2_français', coeff: 1, max: 10 },
                { id: 'p2_math', coeff: 1, max: 10 },
                { id: 'p2_islamic', coeff: 1, max: 10 },
                { id: 'p2_activities', coeff: 1, max: 10 }
            ],
            'primary3': [
                { id: 'p3_arabe', coeff: 1, max: 10 },
                { id: 'p3_français', coeff: 1, max: 10 },
                { id: 'p3_math', coeff: 1, max: 10 },
                { id: 'p3_islamic', coeff: 1, max: 10 },
                { id: 'p3_activities', coeff: 1, max: 10 },
                { id: 'p3_social', coeff: 1, max: 10 }
            ],
            'primary4': [
                { id: 'p4_arabe', coeff: 1, max: 10 },
                { id: 'p4_français', coeff: 1, max: 10 },
                { id: 'p4_math', coeff: 1, max: 10 },
                { id: 'p4_islamic', coeff: 1, max: 10 },
                { id: 'p4_activities', coeff: 1, max: 10 },
                { id: 'p4_social', coeff: 1, max: 10 },
                { id: 'p4_science', coeff: 1, max: 10 }
            ],
            'primary5': [
                { id: 'p5_arabe', coeff: 1, max: 10 },
                { id: 'p5_français', coeff: 1, max: 10 },
                { id: 'p5_math', coeff: 1, max: 10 },
                { id: 'p5_islamic', coeff: 1, max: 10 },
                { id: 'p5_activities', coeff: 1, max: 10 },
                { id: 'p5_social', coeff: 1, max: 10 },
                { id: 'p5_science', coeff: 1, max: 10 }
            ],
            'primary6': [
                { id: 'p6_arabe', coeff: 1, max: 10 },
                { id: 'p6_français', coeff: 1, max: 10 },
                { id: 'p6_math', coeff: 1, max: 10 },
                { id: 'p6_islamic', coeff: 1, max: 10 },
                { id: 'p6_activities', coeff: 1, max: 10 },
                { id: 'p6_social', coeff: 1, max: 10 },
                { id: 'p6_science', coeff: 1, max: 10 }
            ],
            
            'college1': [
                { id: 'c1_arabe', coeff: 2, max: 20 },
                { id: 'c1_français', coeff: 2, max: 20 },
                { id: 'c1_math', coeff: 2, max: 20 },
                { id: 'c1_science', coeff: 2, max: 20 },
                { id: 'c1_history', coeff: 1, max: 20 },
                { id: 'c1_islamic', coeff: 1, max: 20 },
                { id: 'c1_english', coeff: 1, max: 20 },
                { id: 'c1_sport', coeff: 1, max: 20 }
            ],
            'college2': [
                { id: 'c2_arabe', coeff: 2, max: 20 },
                { id: 'c2_français', coeff: 2, max: 20 },
                { id: 'c2_math', coeff: 2, max: 20 },
                { id: 'c2_physics', coeff: 2, max: 20 },
                { id: 'c2_svt', coeff: 2, max: 20 },
                { id: 'c2_history', coeff: 1, max: 20 },
                { id: 'c2_islamic', coeff: 1, max: 20 },
                { id: 'c2_english', coeff: 1, max: 20 },
                { id: 'c2_sport', coeff: 1, max: 20 }
            ],
            'college3': [
                { id: 'c3_arabe', coeff: 2, max: 20 },
                { id: 'c3_français', coeff: 2, max: 20 },
                { id: 'c3_math', coeff: 2, max: 20 },
                { id: 'c3_physics', coeff: 2, max: 20 },
                { id: 'c3_svt', coeff: 2, max: 20 },
                { id: 'c3_history', coeff: 1, max: 20 },
                { id: 'c3_islamic', coeff: 1, max: 20 },
                { id: 'c3_english', coeff: 1, max: 20 },
                { id: 'c3_informatics', coeff: 1, max: 20 },
                { id: 'c3_sport', coeff: 1, max: 20 }
            ],
            
            'commonTrunkScience': [
                { id: 'cts_math', coeff: 4, max: 20 },
                { id: 'cts_physics', coeff: 4, max: 20 },
                { id: 'cts_svt', coeff: 4, max: 20 },
                { id: 'cts_informatics', coeff: 2, max: 20 },
                { id: 'cts_arabe', coeff: 2, max: 20 },
                { id: 'cts_français', coeff: 3, max: 20 },
                { id: 'cts_english', coeff: 2, max: 20 },
                { id: 'cts_islamic', coeff: 1, max: 20 },
                { id: 'cts_sport', coeff: 1, max: 20 }
            ],
            'bacScienceMath': [
                { id: 'bsm_math', coeff: 5, max: 20 },
                { id: 'bsm_physics', coeff: 4, max: 20 },
                { id: 'bsm_français', coeff: 3, max: 20 },
                { id: 'bsm_english', coeff: 2, max: 20 },
                { id: 'bsm_philosophy', coeff: 2, max: 20 },
                { id: 'bsm_arabe', coeff: 2, max: 20 },
                { id: 'bsm_history', coeff: 1, max: 20 },
                { id: 'bsm_sport', coeff: 1, max: 20 }
            ]
        };

        
function enableCoeffEditing() {
    document.querySelectorAll('.coeff').forEach(span => {
        span.replaceWith(span.cloneNode(true));
    });

    document.querySelectorAll('.coeff').forEach(span => {
        span.classList.add('coeff-edit');
        
        span.addEventListener('click', function() {
            const currentCoeff = this.textContent.replace('م. ', '').trim();
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'coeff-input';
            input.value = currentCoeff;
            input.min = 1;
            input.step = 1;
            
            this.parentNode.replaceChild(input, this);
            input.focus();
            input.select();
            
            const handleCoeffChange = (e) => {
                if (e.type === 'blur' || e.key === 'Enter') {
                    const newCoeff = input.value;
                    if (newCoeff >= 1) {
                        const newSpan = document.createElement('span');
                        newSpan.className = 'coeff coeff-edit';
                        newSpan.textContent = `م. ${newCoeff}`;
                        input.parentNode.replaceChild(newSpan, input);
                        
                        enableCoeffEditing();
                    }
                }
            };

            input.addEventListener('blur', handleCoeffChange);
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleCoeffChange(e);
                }
            });
        });
    });
}

        function addRemoveButtonsToExistingSubjects() {
            document.querySelectorAll('.subjects-grid .input-group:not(:has(.remove-subject-btn))').forEach(group => {
                const labelElement = group.querySelector('label');
                const subjectNameInput = group.querySelector('.subject-name-input');

                if (labelElement || subjectNameInput) {
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-subject-btn';
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.onclick = function() {
                        this.parentElement.remove();
                        const levelId = this.closest('.level-section').id;
                        document.getElementById(`result_${levelId}`).textContent = '';
                        document.getElementById(`result_${levelId}`).className = 'result-display';
                    };
                    group.prepend(removeBtn);
                }
            });
        }

function addSubject(gridId, maxScore = 20) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const newSubjectHTML = `
        <div class="input-group">
            <button class="remove-subject-btn" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <input type="text" class="subject-name-input" placeholder="اسم المادة" value="مادة جديدة">
            <input type="number" class="subject-score-input" min="0" max="${maxScore}" step="0.01" placeholder="النقطة">
            <span class="coeff">م. 1</span>
        </div>
    `;

    grid.insertAdjacentHTML('beforeend', newSubjectHTML);
    enableCoeffEditing();
}
        function calculateLevelAverage(levelId) {
            let totalWeightedPoints = 0;
            let totalCoefficients = 0;
            let allInputsValid = true;
            const resultDiv = document.getElementById(`result_${levelId}`);
            resultDiv.className = 'result-display';

            const subjectsGrid = document.getElementById(`subjects_grid_${levelId}`);
            if (!subjectsGrid) {
                resultDiv.textContent = 'خطأ: لم يتم العثور على شبكة المواد لهذا المستوى.';
                resultDiv.classList.add('invalid');
                return;
            }

            const subjectGroups = subjectsGrid.querySelectorAll('.input-group');

            if (subjectGroups.length === 0) {
                resultDiv.textContent = 'الرجاء إضافة مادة واحدة على الأقل لحساب المعدل.';
                resultDiv.classList.add('invalid');
                return;
            }

                let overallMaxScore = 20;
    if (levelId.includes('primary')) {
        overallMaxScore = 10;
    }
            subjectGroups.forEach(group => {
                const scoreInput = group.querySelector('input[type="number"]');
                const coeffSpan = group.querySelector('.coeff');
                
                if (!scoreInput || !coeffSpan) {
                    console.warn("Skipping an input group due to missing elements.");
                    return;
                }

                const score = parseFloat(scoreInput.value);
                const coeffText = coeffSpan.textContent.replace('م. ', '').trim();
                const coeff = parseInt(coeffText);

                if (isNaN(score) || isNaN(coeff) || score < 0 || score > overallMaxScore) {
                    allInputsValid = false;
                } else {
                    totalWeightedPoints += score * coeff;
                    totalCoefficients += coeff;
                }
            });

            if (!allInputsValid) {
                resultDiv.textContent = `الرجاء إدخال نقاط صحيحة بين 0 و ${overallMaxScore} لكل المواد.`;
                resultDiv.classList.add('invalid');
                return;
            }

            if (totalCoefficients === 0) {
                resultDiv.textContent = 'لا توجد مواد بمعاملات لحساب المعدل.';
                resultDiv.classList.add('invalid');
                return;
            }

            const average = totalWeightedPoints / totalCoefficients;
            const formattedAverage = average.toFixed(2);

            resultDiv.textContent = `المعدل: ${formattedAverage} / ${overallMaxScore}`;

            const passingThreshold = overallMaxScore / 2;
            if (average >= passingThreshold) {
                resultDiv.classList.add('success');
                resultDiv.textContent += ' - ناجح!';
            } else {
                resultDiv.classList.add('failure');
                resultDiv.textContent += ' - راسب.';
            }
        }

        function calculateBacAverage() {
            const regionalScore = parseFloat(document.getElementById('bac_regional').value);
            const nationalScore = parseFloat(document.getElementById('bac_national').value);
            const resultDiv = document.getElementById('result_baccalaureate');
            resultDiv.className = 'result-display';

            if (isNaN(regionalScore)) {
                resultDiv.textContent = 'الرجاء إدخال معدل صحيح للامتحان الجهوي.';
                resultDiv.classList.add('invalid');
                return;
            }

            if (isNaN(nationalScore)) {
                resultDiv.textContent = 'الرجاء إدخال معدل صحيح للامتحان الوطني.';
                resultDiv.classList.add('invalid');
                return;
            }

            if (regionalScore < 0 || regionalScore > 20 || nationalScore < 0 || nationalScore > 20) {
                resultDiv.textContent = 'الرجاء إدخال نقاط صحيحة بين 0 و 20 للامتحانين الجهوي والوطني.';
                resultDiv.classList.add('invalid');
                return;
            }

            const bacAverage = (regionalScore * 0.25) + (nationalScore * 0.75);
            const formattedAverage = bacAverage.toFixed(2);

            resultDiv.textContent = `معدل البكالوريا: ${formattedAverage} / 20`;

            if (bacAverage >= 10) {
                resultDiv.classList.add('success');
                resultDiv.textContent += ' - ناجح!';
            } else {
                resultDiv.classList.add('failure');
                resultDiv.textContent += ' - غير ناجح.';
            }
        }

        function showLevelSection() {
            const selectedLevel = document.getElementById('levelSelect').value;
            const sections = document.querySelectorAll('.level-section');

            sections.forEach(section => {
                section.classList.remove('active');
                const resultDiv = section.querySelector('.result-display');
                if (resultDiv) {
                    resultDiv.textContent = '';
                    resultDiv.className = 'result-display';
                }
            });

            if (selectedLevel !== 'none') {
                const activeSection = document.getElementById(selectedLevel);
                if (activeSection) {
                    activeSection.classList.add('active');
                    activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    addRemoveButtonsToExistingSubjects();
                    enableCoeffEditing();
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            showLevelSection();
            addRemoveButtonsToExistingSubjects();
            enableCoeffEditing();
        });

